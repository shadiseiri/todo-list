import { useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplete = !selectedTodo.isComplete;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

const editHandler = (id) => {
console.log(id);
}


  return (
    <div className={styles.container}>
      <TodoForm submitTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onCompelete={completeHandler}
        onDelete={deleteHandler}
        onUpdateTodo = {editHandler}
      />
    </div>
  );
};

export default TodoApp;
