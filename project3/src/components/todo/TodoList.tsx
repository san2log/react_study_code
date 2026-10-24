import { useTodos, useToggleTodo, useRemoveTodo } from "../../store/todo";

export default function TodoList() {
  const todos = useTodos();
  const toggle = useToggleTodo();
  const remove = useRemoveTodo();

  return (
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
  );
}
