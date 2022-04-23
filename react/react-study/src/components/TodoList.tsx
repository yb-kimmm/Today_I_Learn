import TodoItem from "./TodoItem";
import styles from "../Todo.module.css"
// import {useState} from "react";
// import { Todo }  from "../App"

// import { TodoConsumer } from "../contexts/todo";

import { useContext } from 'react';
import TodoContext from "../contexts/todo"

import { Todo } from "../App";

interface Props { 
  readonly todos : Todo[];
  readonly onRemove  : (id: number) => void;
  readonly onToggle : (id : number) => void;
}

const TodoList = ({ todos , onRemove , onToggle} : Props) => {
  
  return (
        <div className = {styles.list}>
          {todos.map((todo) => 
          (<TodoItem 
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}/>
          ))}
        </div>

    // <TodoConsumer>
    //   {({state , actions}) =>(
    //     <div className = {styles.list}>
    //       {state.todos.map((todo) => 
    //       (<TodoItem 
    //         todo={todo}
    //         key={todo.id}
    //         onRemove={actions.onRemove}
    //         onToggle={actions.onToggle}/>
    //       ))}
    //     </div>

    //   )}

    // </TodoConsumer>
  )
}
// interface Props {
//   readonly todos : Todo[];

//   readonly onRemove : (id : number) => void;
//   readonly onToggle : (id : number) => void;
// }

// const TodoList = ( {todos , onRemove, onToggle}:Props) =>{
//   // const [todos] = useState (["todoItem1" , "tidiItem2" , "todoItem3"])

//   return (
//     <div className = {styles.list}>
//       {todos.map((todo) => (<TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>))}
//     </div>
//   )
// }
export default TodoList;
