import { useCount } from "../store/count"

export default function view() {
    const count = useCount(); //store에 count 값 가져오기
  return (
    <div>count: {count}</div>
  )
}
