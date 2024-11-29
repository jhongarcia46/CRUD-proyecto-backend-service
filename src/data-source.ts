import "reflect-metadata";
import { DataSource } from "typeorm";
import { Moto } from "./entities/Moto";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Moto],
  migrations:[],
  subscribers:[]
});