import {useEffect, useRef, useState} from "react"
import styles from "./TodoForm.module.css"


const TodoForm = ({submitTodo , edit}) => {
const [input,setInput] = useState(edit? edit.text : "")
const inputRef = useRef("")


useEffect(() => {inputRef.current.focus()} , [])

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
      <input type="text" value={input} onChange={changeHandler} placeholder="add a todo"  ref={inputRef}/>
      <button type="submit" className={edit? styles.update: styles.addTodo} >{edit? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
