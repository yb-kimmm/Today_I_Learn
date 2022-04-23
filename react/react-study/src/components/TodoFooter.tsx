import styles from "../Todo.module.css"
// import { TodoConsumer } from "../contexts/todo";

import { useContext } from 'react';
import TodoContext from "../contexts/todo"

import { Todo }  from "../App";

interface Props { 
  readonly onClearAll : () => void;
}

const TodoFooter = ({onClearAll} : Props) =>{

  // const {actions} = useContext(TodoContext);

  return (
    // <TodoConsumer>
    //     {({ actions})=>(
        <div className = {styles.footer}>
          <button onClick = {() => onClearAll()}>모두 삭제</button>
        </div>
        // )}
    // </TodoConsumer>
  )
}

// interface Props {
//   readonly onClearAll : () => void;
// }
// const TodoFooter = ({onClearAll } : Props) =>{
//   return <div className = {styles.footer}>
//     <button onClick = {() => onClearAll()}>모두 삭제</button>
//   </div>
// }

export default TodoFooter;
