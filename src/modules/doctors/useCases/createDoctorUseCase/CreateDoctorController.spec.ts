import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../shared/infra/http/app";
import createConnection from "../../../../shared/infra/typeorm";
import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

let connection: Connection;
let categoryRepository: ICategoriesRepository;

describe("Create Doctor Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, telefone, created_at, updated_at)
    values('${id}', 'admin', 'admin@codestation.com', '${password}', '2222222', 'now()', 'now()')
    `
    );
  });

  beforeEach(() => {
    categoryRepository = new CategoriesRepository();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to create a new user", async () => {
    const responsToken = await request(app).post("/sessions").send({
      email: "admin@codestation.com",
      password: "admin",
    });

    const { token, user } = responsToken.body;

    const category = await categoryRepository.create({
      name: "Category Test",
    });

    const response = await request(app)
      .post("/doctors")
      .send({
        user_id: user.id,
        crm: 123456789,
        clinicAdress: "St. A, 123",
        availableAgenda: "Mon. 18:00 - 20:00",
        bio: "User's Bio",
        category_id: category.id,
        uf: "RJ",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(201);
  });
});
