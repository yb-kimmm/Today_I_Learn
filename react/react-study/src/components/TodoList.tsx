import TodoItem from "./TodoItem";
import styles from "../Todo.module.css"
// import {useState} from "react";
import { Todo }  from "../App"

interface Props {
  readonly todos : Todo[];

  readonly onRemove : (id : number) => void;
  readonly onToggle : (id : number) => void;
}

const TodoList = ( {todos , onRemove, onToggle}:Props) =>{
  // const [todos] = useState (["todoItem1" , "tidiItem2" , "todoItem3"])

  return (
    <div className = {styles.list}>
      {todos.map((todo) => (<TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>))}
    </div>
  )
}
export default TodoList;
