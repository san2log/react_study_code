import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

// create 안에 immer, 그 안에 combine 순서로 감싼다
export const useTodoStore = create(
  immer(
    combine(
      // 첫 번째 인자: state
      // 빈 배열은 무엇이 들어갈지 알 수 없어서 타입을 직접 알려준다
      { todos: [] as Todo[] },

      // 두 번째 인자: 액션 함수
      // immer 덕분에 set 안에서 state를 직접 고쳐도 된다
      (set) => ({
        // 할 일 추가: 배열에 바로 push
        add: (content: string) =>
          set((state) => {
            state.todos.push({ id: Date.now(), content, done: false });
          }),

        // 완료 표시: 찾은 할 일의 done만 바로 바꿈
        toggle: (id: number) =>
          set((state) => {
            const todo = state.todos.find((item) => item.id === id);
            if (todo) todo.done = !todo.done;
          }),

        // 할 일 삭제: 걸러낸 새 배열을 그대로 대입
        remove: (id: number) =>
          set((state) => {
            state.todos = state.todos.filter((item) => item.id !== id);
          }),
      }),
    ),
  ),
);
