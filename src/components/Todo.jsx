import styles from "./Todo.module.css"



const Todo = ({ todo , onCompelete , onDelete }) => {
  return (
    <div className={styles.todoContainer}>
      <div className={todo.isComplete ? `${styles.completed}` : `${styles.todo}`} onClick={onCompelete}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
