import { useState } from "react";
import { useTodoStore } from "./store/todo";

function App() {
  // 입력 중인 글자는 이 컴포넌트에서만 쓰므로 useState로 관리
  const [content, setContent] = useState("");

  // store에서 필요한 값과 액션만 꺼내 쓴다
  const todos = useTodoStore((state) => state.todos);
  const add = useTodoStore((state) => state.add);
  const toggle = useTodoStore((state) => state.toggle);
  const remove = useTodoStore((state) => state.remove);

  const handleAdd = () => {
    if (!content.trim()) return; // 빈 입력은 추가하지 않음
    add(content);
    setContent("");
  };

  return (
    <>
      <h1>할 일 목록</h1>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggle(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.content}
            </span>
            <button onClick={() => remove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
