module.exports = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: "workshop_nodejs",
  migrations: ["./src/typeorm/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.entity.ts"],
  cli: {
    migrationsDir: "./src/typeorm/migrations",
  },
};
