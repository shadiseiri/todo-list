import { useEffect, useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import NavBar from "../NavBar/NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editHandler = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;

      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const selectHandler = (selectedOption) => {
    setSelectedOption(selectedOption);
    filterTodos(selectedOption.value);
  };

  return (
    <div className={styles.container}>
      <NavBar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        onChange={selectHandler}
        selectedOption={selectedOption}
        todos={todos}
      />
      <TodoForm submitTodo={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onCompelete={completeHandler}
        onDelete={deleteHandler}
        onUpdateTodo={editHandler}
      />
    </div>
  );
};

export default TodoApp;
