import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, getTodo } from "@/actions/todo";

export function useCreateTodo() {
  return useMutation({
    mutationFn: addTodo,
  });
}

export function useListTodo() {
  return useQuery({
    queryKey: ["GET_TODOS"],
    queryFn: getTodo,
  });
}
