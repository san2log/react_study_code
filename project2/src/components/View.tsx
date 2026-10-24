import { useCount } from "../store/count";

export default function View() {
  const count = useCount();// store에서 만든 훅 호출

  return <div>count: {count}</div>;
}
