
//combine을 사용해서 분리해서 store를 생성하는 이유는 첫번째인수의 state타입이 자동으로 추론됨
//즉 따로 타입을 정의 하지않아도 state,action이 자동으로 타입 추론이됨

  //원래의 store마냥 들어감 count :0 , action increase decrease 그게들어감
/*
셀렉터 함수(selector)는 zustand store 전체에서 내가 원하는 값만 골라서(select) 꺼내오는 함수예요.
 셀렉터함수를 통해 원하는 액션만 state.action.increase 이렇게 골라서 꺼내면 불필요한 렌더링을 막을 수 있음

유지보수를 위해 store를 함수형태로 만들어서 내보냄
아래 처럼 커스텀 훅으로 감싸서 내보내는게 안정적임

*/
export const useIncreaseCount = () => {
  const increase = useCountStore((state) => state.action.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((state) => state.action.decrease);
  return decrease;
};

export const useReset = () => {
  const reset = useCountStore((state) => state.action.reset);
  return reset;
};
  //zustand는 컴포넌트에서 불러온 store값들 중, 하나라도 업데이트가 되면 , 해당 컴포넌트를 자동으로 리렌더링 시킴
  //현재 controller 컴포넌트에서 store객체의 전부를 불러옴
  // 위에 코드처럼 각각 함수형태로 불러와야지 불필요한 렌더링이 안생김 만약 같이 불러왔다면 인크리즈가 상태가 변경되면 디크리즈도 컴포넌트가 리렌더링됨