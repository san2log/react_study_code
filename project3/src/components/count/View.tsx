import { useCount } from "../../store/count";

export default function View() {
  const count = useCount();

  return <div>count: {count}</div>;
}
