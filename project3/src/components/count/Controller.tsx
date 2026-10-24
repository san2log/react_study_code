import {
  useIncreaseCount,
  useDecreaseCount,
  useSave,
} from "../../store/count";

export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  const save = useSave();

  return (
    <div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={save}>저장</button>
    </div>
  );
}
