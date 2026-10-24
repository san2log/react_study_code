import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useCountStore = create(
  combine({ count: 0 }, (set, get) => ({
    action: {
      increase: () =>
        set((state) => ({
          count: state.count + 1,
        })),
      decrease: () =>
        set((state) => ({
          count: state.count - 1,
        })),
      save: () => {
        alert(`카운트 ${get().count} 저장`);
      },
    },
  })),
);

export const useCount = () => useCountStore((state) => state.count);

export const useIncreaseCount = () =>
  useCountStore((state) => state.action.increase);

export const useDecreaseCount = () =>
  useCountStore((state) => state.action.decrease);

export const useSave = () => useCountStore((state) => state.action.save);
