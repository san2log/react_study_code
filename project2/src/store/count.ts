import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  immer(
    combine({ count: 0 }, (set/*,get*/) => ({
      action: {
        increase: () =>
          set((state) => {
            state.count += 1;
          }),

        decrease: () =>
          set((state) => {
            state.count -= 1;
          }),
      /*  resetIfMax: () => {
          if (get().count >= 100) {
            // get으로 현재 count 값을 확인 후 조건에 따라 set 호출
            set({ count: 0 });
          }
        },*/
        reset: (data: number) =>
          set((state) => {
            state.count = data;
          }),
      },
    })),
  ),
);

export const useCount = () => {
  const count = useCountStore((state) => state.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((state) => state.action.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((state) => state.action.decrease);
  return decrease;
};
/*
export const useResetIfMax = () => {
  const reset = useCountStore((state) => state.action.reset);
  return reset;
};

*/
export const useReset = () => {
  const reset = useCountStore((state) => state.action.reset);
  return reset;
};
