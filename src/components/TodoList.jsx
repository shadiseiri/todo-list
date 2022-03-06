import Todo from "./Todo";
import styles from "./TodoList.module.css"

const TodoList = ({ todos , onCompelete }) => {
  const renderHandler = () => {
    if (todos.length === 0) {
      return <p>Add some todos</p>;
    }
    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} onCompelete={()=> onCompelete(todo.id)} />;
    });
  };

  return <div className={styles.todosContainer}>{renderHandler()}</div>;
};

export default TodoList;
