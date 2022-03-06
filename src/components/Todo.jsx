import styles from "./Todo.module.css"



const Todo = ({ todo , onCompelete , onDelete , onEdit}) => {
  return (
    <div className={styles.todoContainer}>
      <div className={todo.isComplete ? `${styles.completed}` : `${styles.todo}`} onClick={onCompelete}>{todo.text}</div>
      <div>
        <button onClick={onEdit} >Edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
