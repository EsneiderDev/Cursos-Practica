import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { InMemoryUserRepository } from "../../User/infrastructure/InMemoryUserRepository";
import { PostgresUserRepository } from "../../User/infrastructure/PostgresUserRepository";
import { UserGetOneById } from "../../User/application/UserGetOneById/UserGetOneById";
import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";
import { UserRepository } from "../../User/domain/UserRepository";

const userRepository: UserRepository = process.env.DATABASE_URL
  ? new PostgresUserRepository(process.env.DATABASE_URL)
  : new InMemoryUserRepository();

export const ServiceContainer = {
  user: {
    getAll: new UserGetAll(userRepository),
    getOneById: new UserGetOneById(userRepository),
    create: new UserCreate(userRepository),
    edit: new UserEdit(userRepository),
    delete: new UserDelete(userRepository),
  },
};
