import { create } from "zustand";

interface CountStore {
  count: number;
  action: {
    increase(): void;
    decrease(): void;
    save(): void;
  };
}

export const useCountStore = create<CountStore>((set, get) => ({
  count: 0,
  action: {
    increase: () =>
      set((state) => ({
        // set을 함수형으로 사용하여 현재 스토어의 값으로 받을 수 있음
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
}));

export const useCount = () => useCountStore((state) => state.count);

export const useIncreaseCount = () =>
  useCountStore((state) => state.action.increase);

export const useDecreaseCount = () =>
  useCountStore((state) => state.action.decrease);

export const useSave = () => useCountStore((state) => state.action.save);
