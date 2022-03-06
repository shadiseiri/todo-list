import {useState} from "react"
import styles from "./TodoForm.module.css"


const TodoForm = ({submitTodo}) => {
const [input,setInput] = useState("")

const changeHandler = (e) => {
setInput(e.target.value)
}
const submitHandler = (e) => {
e.preventDefault();
if (input === "") {
    alert("pelase type some todo")
    return
}
submitTodo(input)
setInput("")
}

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input type="text" value={input} onChange={changeHandler} placeholder="add a todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
