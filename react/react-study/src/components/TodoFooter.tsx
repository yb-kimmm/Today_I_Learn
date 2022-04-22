import styles from "../Todo.module.css"
import { TodoConsumer } from "../contexts/todo";

const TodoFooter = () =>{
  return (
    <TodoConsumer>
        {({ actions})=>(
          <div className = {styles.footer}>
            <button onClick = {() => actions.onClearAll()}>모두 삭제</button>
          </div>
        )}
    </TodoConsumer>
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
