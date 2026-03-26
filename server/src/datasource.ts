import { DataSource } from "typeorm";



const datasource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  entities: ["./src/entities/**/*.{js,ts}"],
  logging: true,
  synchronize: true,
});

export default datasource;