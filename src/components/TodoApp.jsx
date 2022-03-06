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
    const selectedTodo = {...todos[index]}
    // const completedTodo = {...todo , isComplete: !todo.isComplete};
    selectedTodo.isComplete = !selectedTodo.isComplete;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    console.log(todos);
  };

  return (
    <div className={styles.container}>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onCompelete={completeHandler} />
    </div>
  );
};

export default TodoApp;
