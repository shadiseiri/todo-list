import styles from "./Todo.module.css"



const Todo = ({ todo , onCompelete , onDelete , onEdit}) => {
  return (
    <div className={styles.todoContainer}>
      <div className={todo.isCompleted ? styles.completed : styles.todo} onClick={onCompelete}>{todo.text}</div>
      <div>
        <button onClick={onEdit} className={styles.btn} >Edit</button>
        <button onClick={onDelete} className={`${styles.btn} ${styles.remove}`} >Delete</button>
      </div>
    </div>
  );
};

export default Todo;
