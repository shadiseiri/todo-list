import {useState} from "react"
import styles from "./TodoForm.module.css"


const TodoForm = (props) => {
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
props.addTodoHandler(input)
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
