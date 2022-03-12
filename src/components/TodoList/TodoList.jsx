import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onCompelete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "", isCompleted: false })
  };

  const renderHandler = () => {
    if (todos.length === 0) {
      return <p>Add some todos</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompelete={() => onCompelete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div className={styles.todosContainer}>
      {edit.id ? (
        <TodoForm submitTodo={editTodo} edit={edit} />
      ) : (
        renderHandler()
      )}
    </div>
  );
};

export default TodoList;
