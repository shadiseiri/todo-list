import styles from "./Todo.module.css"



const Todo = ({ todo , onCompelete }) => {
  return (
    <div className={styles.todoContainer}>
      <div className={todo.isComplete ? `${styles.completed}` : `${styles.todo}`}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onCompelete}>complete</button>
      </div>
    </div>
  );
};

export default Todo;
