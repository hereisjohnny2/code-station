import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/respositories/IUsersRepository";
import { DoctorsRepositories } from "../../modules/doctors/infra/typeorm/repositories/DoctorsRepositories";
import { IDoctorsRepository } from "../../modules/doctors/repositories/IDoctorsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IDoctorsRepository>(
  "DoctorsRepository",
  DoctorsRepositories
);
