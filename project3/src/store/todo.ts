import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}

export const useTodoStore = create(
  immer(
    combine({ todos: [] as Todo[] }, (set) => ({
      action: {
        add: (content: string) =>
          set((state) => {
            state.todos.push({ id: crypto.randomUUID(), content, done: false });
          }),
        toggle: (id: string) =>
          set((state) => {
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) todo.done = !todo.done;
          }),
        remove: (id: string) =>
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== id);
          }),
      },
    })),
  ),
);

export const useTodos = () => useTodoStore((state) => state.todos);

export const useAddTodo = () => useTodoStore((state) => state.action.add);

export const useToggleTodo = () =>
  useTodoStore((state) => state.action.toggle);

export const useRemoveTodo = () =>
  useTodoStore((state) => state.action.remove);
