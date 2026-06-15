import { Surreal } from "surrealdb";

const db = new Surreal();

let connected = false;

export async function surreal() {
  if (!connected) {
    await db.connect(process.env.SURREAL_URL!);

    await db.signin({
      username: process.env.SURREAL_USERNAME!,
      password: process.env.SURREAL_PASSWORD!,
    });

    await db.use({
      namespace: process.env.SURREAL_NAMESPACE!,
      database: process.env.SURREAL_DATABASE!,
    });

    connected = true;
  }

  return db;
}
