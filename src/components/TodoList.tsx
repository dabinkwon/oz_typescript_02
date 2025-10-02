// TodoList.js
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

interface TodoListProps {
  todos: {id: number, text: string, completed: boolean}[];
  toggleComplete(id: number):void;
  showCompleted: boolean
}

const TodoList = ({ todos, toggleComplete, showCompleted }:TodoListProps) => {
  return (
    <ul>
      {todos
        .filter((todo) => (showCompleted ? true : !todo.completed))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
    </ul>
  );
};

export default TodoList;
