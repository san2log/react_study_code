import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      action: {
        increase: () =>
          set((state) => {
            state.count += 1;
          }),
        decrease: () =>
          set((state) => {
            state.count -= 1;
          }),
        resetIfMax: () => {
          // 현재 store 값이 10 이상일 때만 초기화한다.
          if (get().count >= 10) {
            set({ count: 0 });
          }
          else{
            alert("10이상 일 경우에만 초기화됨")
          }
        },
      },
    })),
  ),
);

export const useCount = () => useCountStore((state) => state.count);

export const useIncreaseCount = () =>
  useCountStore((state) => state.action.increase);

export const useDecreaseCount = () =>
  useCountStore((state) => state.action.decrease);

export const useResetIfMax = () =>
  useCountStore((state) => state.action.resetIfMax);
