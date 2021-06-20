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

describe("Show Doctor Profile", () => {
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

  it("should be able to show a doctor profile", async () => {
    const responsToken = await request(app).post("/sessions").send({
      email: "admin@codestation.com",
      password: "admin",
    });

    const { token, user } = responsToken.body;

    const category = await categoryRepository.create({
      name: "Category Test",
    });

    const createdDoctorResponse = await request(app)
      .post("/doctors")
      .send({
        user_id: user.id,
        crm: 123456789,
        clinicAdress: "St. A, 123",
        uf: "RJ",
        availableAgenda: "Mon. 18:00 - 20:00",
        bio: "User's Bio",
        category_id: category.id,
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const { id: doctor_id } = createdDoctorResponse.body;

    const response = await request(app).get(`/doctors/${doctor_id}`);

    expect(response.status).toBe(200);
    expect(response.body.user_id).toBe(createdDoctorResponse.body.user_id);
  });
});
