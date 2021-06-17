import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

let categoriesRepository: ICategoriesRepository;
let listCategoriesUseCase: ListCategoriesUseCase;

describe("List Categories", () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoryInMemory();
    listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  });

  it("should be able to list all available categories", async () => {
    const category = await categoriesRepository.create({
      name: "Category 1",
      symptomesAssociated: ["Symptome 1", "Symptome 2"],
    });

    const categories = await listCategoriesUseCase.execute();

    expect(categories.length).toBe(1);
    expect(categories[0]).toMatchObject(category);
  });
});
