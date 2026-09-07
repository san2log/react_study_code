import {
  useDecreaseCount,
  useIncreaseCount,
  useResetIfMax,
} from "../store/count";

function Controller() {
  //store에있는 state,action중 하나라도 업데이트 되면 리렌더링 되는 것을 막기위해 분리해서 호출
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  const resetIfMax = useResetIfMax();

  return (
    <div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={resetIfMax}>10 이상이면 초기화 </button>
    </div>
  );
}

export default Controller;
