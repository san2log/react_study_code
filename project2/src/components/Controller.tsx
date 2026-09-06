import { useState } from "react";
import { useIncreaseCount, useDecreaseCount, useReset } from "../store/count";
function Controller() {
  //store에있는 state,action중 하나라도 업데이트 되면 리렌더링 되는 것을 막기위해 분리해서 호출
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  const reset = useReset();

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // e.target.value는 무조건 string이므로 추후 숫자로 변환해야 함
    setValue(e.target.value);
  };
  return (
    <div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <input type="text" value={value} onChange={handleChange} placeholder="입력된 값으로 count 변경"/>
      <button onClick={() => reset(Number(value))}>reset</button>
    </div>
  );
}

export default Controller;
