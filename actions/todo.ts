"use server";

import { createTodo, listTodo } from "@/repositories/todo.repository";
import { inngest } from "@/inngest/client";

export async function addTodo(title: string) {
  const todo = await createTodo(title);

  await inngest.send({
    name: "todo.created",
    data: {
      id: todo.id,
      title: todo.title,
    },
  });

  return todo;
}

export async function getTodo() {
  return listTodo();
}
