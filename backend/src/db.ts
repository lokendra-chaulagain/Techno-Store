import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Lokendra@55",
  database: "techno-store",
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.ts"],
  // entities: ["src/entities/*{.ts..js}"],
});
