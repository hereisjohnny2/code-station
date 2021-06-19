import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/respositories/IUsersRepository";
import { CategoriesRepository } from "../../modules/doctors/infra/typeorm/repositories/CategoriesRepository";
import { DoctorsRepositories } from "../../modules/doctors/infra/typeorm/repositories/DoctorsRepositories";
import { SymptomesRepository } from "../../modules/doctors/infra/typeorm/repositories/SymptomesRepository";
import { ICategoriesRepository } from "../../modules/doctors/repositories/ICategoriesRepository";
import { IDoctorsRepository } from "../../modules/doctors/repositories/IDoctorsRepository";
import { ISymptomRepository } from "../../modules/doctors/repositories/ISymptomRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IDoctorsRepository>(
  "DoctorsRepository",
  DoctorsRepositories
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISymptomRepository>(
  "SymptomesRepository",
  SymptomesRepository
);
