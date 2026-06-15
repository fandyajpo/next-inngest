import { surreal } from "@/lib/surreal";
import { todos } from "@/tables/todo";
import { Todo } from "@/types/todo";

export async function createTodo(title: string) {
  const db = await surreal();
  const result = await db.create<Todo>(todos).content({
    title,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const todo = Array.isArray(result) ? result[0] : result;
  return {
    id: todo.id?.toString?.() ?? String(todo.id),
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt?.toString?.() ?? null,
    updatedAt: todo.updatedAt?.toString?.() ?? null,
  };
}

export async function listTodo() {
  const db = await surreal();
  const result = await db.select<Todo>(todos);
  return result;
}
