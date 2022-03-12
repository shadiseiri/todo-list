import styles from "./App.module.css";
import TodoApp from "./components/TodoApp/TodoApp.jsx";

function App() {
  return (
    <div className={styles.App}>
      <h1>Todo List App</h1>
      <TodoApp />
    </div>
  );
}

export default App;
