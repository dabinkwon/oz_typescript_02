import React, { useState } from "react";
import "../styles/AddTodo.css";

interface AddTodoProps {
  addTodo(text: string):void;
}

const AddTodo = ({addTodo}: AddTodoProps) => {
  const [text, setText] = useState("");

  //이벤트 객체는 React.FormEvent<HTMLFormElement> 타입입니다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="새 할 일을 입력하세요."
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodo;
