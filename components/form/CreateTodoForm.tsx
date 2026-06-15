"use client";

import { useForm } from "react-hook-form";

import { Todo } from "@/types/todo";

import { useCreateTodo } from "@/hooks/todo";

export function CreateTodoForm() {
  const mutation = useCreateTodo();

  const form = useForm<Todo>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: Todo) => {
    await mutation.mutateAsync(values.title);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...form.register("title")}
        placeholder="Create new todo..."
        className="w-full rounded-lg border p-3"
      />

      {form.formState.errors.title && (
        <p className="text-sm text-red-500">
          {form.formState.errors.title.message}
        </p>
      )}

      <button
        disabled={mutation.isPending}
        className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {mutation.isPending ? "Creating..." : "Create Todo"}
      </button>
    </form>
  );
}
