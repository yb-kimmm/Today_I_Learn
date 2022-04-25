// import React, { useState} from "react";
// import { TodoConsumer } from "../contexts/todo";

import styles from "../Todo.module.css"


interface Props {
  readonly input : string ;
  readonly onInsert : (input : string) => void;
  readonly onChangeInput : (input : string) => void;
}

const TodoInput = ( {input , onInsert , onChangeInput} : Props) =>{


  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value);
  }

  // const { state , actions } = useContext(TodoContext);
  
  return (
    <div className = {styles.input}>
      <form onSubmit={onSubmit}>
        <input placeholder = "할 일을 입력하세요" value={input} onChange = {onChange}/>
        <button type = "submit" > 추가</button>
      </form>
    </div>
  )
  // return (
  //   <TodoConsumer>
  //     {({state, actions}) =>(
  //       <div className = {styles.input}>
  //         <form onSubmit={actions.onSubmit}>
  //           <input placeholder = "할 일을 입력하세요" value={state.input} onChange = {actions.onChange}/>
  //           <button type = "submit" > 추가</button>
  //         </form>
  //       </div>
  //     )}
  //   </TodoConsumer>
  // )
}

// interface Props { 
//   readonly input : string;
//   readonly onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
//   readonly onSubmit : (e : React.FormEvent<HTMLFormElement>) => void;
// }

// const TodoInput = ({ input , onChange , onSubmit } : Props) =>{

//   // const [value , setValue ] = useState("")

//   // const onSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
//   //   e.preventDefault();
//   //   onInsert(value);
//   //   setValue("");
//   // }

//   // const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
//   //   setValue(e.target.value);
//   // }


//   return <div className = {styles.input}>
//     <form onSubmit={onSubmit}>
//       <input placeholder = "할 일을 입력하세요" value={input} onChange = {onChange}/>
//       <button type = "submit" > 추가</button>
//     </form>
//   </div>
// }

export default TodoInput;
