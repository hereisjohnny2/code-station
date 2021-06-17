import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "codestation_database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "database_test"
          : defaultOptions.database,
    })
  );
};
