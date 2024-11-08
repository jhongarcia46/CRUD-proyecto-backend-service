import "reflect-metadata";
import { DataSource } from "typeorm";
import { moto } from "./entities/moto";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [moto],
  migrations:[],
  subscribers:[]
});