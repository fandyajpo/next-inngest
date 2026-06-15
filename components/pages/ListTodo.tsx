"use client";

import { useListTodo } from "@/hooks/todo";

export function ListTodo() {
  const { data, isLoading, error } = useListTodo();

  if (isLoading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>Failed to load todos</p>;
  }

  if (!data || data.length === 0) {
    return <p>No todos yet</p>;
  }

  return (
    <ul className="space-y-2">
      {data.map((todo) => (
        <li
          key={todo.id.toString()}
          className="flex items-center justify-between rounded-lg border p-3"
        >
          <div>
            <p className={todo.completed ? "line-through" : ""}>{todo.title}</p>
            <small className="text-gray-500">
              {new Date(todo.createdAt).toLocaleString()}
            </small>
          </div>

          <span
            className={todo.completed ? "text-green-500" : "text-yellow-500"}
          >
            {todo.completed ? "Done" : "Pending"}
          </span>
        </li>
      ))}
    </ul>
  );
}
