import View from "./components/count/View";
import Controller from "./components/count/Controller";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <>
      <h2>combine: 카운터</h2>
      <View />
      <Controller />

      <h2>immer: 할 일 목록</h2>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
