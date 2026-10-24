import { useState } from "react";
import { useAddTodo } from "../../store/todo";

export default function TodoInput() {
  const [content, setContent] = useState("");
  const add = useAddTodo();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;
    add(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}
