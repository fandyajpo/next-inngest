"use server";

import { surreal } from "@/lib/surreal";

export async function testConnection() {
  const db = await surreal();

  const result = await db.query("RETURN 'Hello SurrealDB';");

  console.log(result);

  return result;
}
