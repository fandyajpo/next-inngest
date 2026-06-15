import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, getTodo } from "@/actions/todo";
import { client } from "@/components/provider/TanstackProviders";

export function useCreateTodo() {
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => client.invalidateQueries({ queryKey: ["GET_TODOS"] }),
  });
}

export function useListTodo() {
  return useQuery({
    queryKey: ["GET_TODOS"],
    queryFn: getTodo,
  });
}
