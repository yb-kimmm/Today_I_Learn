import React, { useState} from "react";

import styles from "../Todo.module.css"

interface Props { 
  readonly input : string;
  readonly onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
  readonly onSubmit : (e : React.FormEvent<HTMLFormElement>) => void;
}

const TodoInput = ({ input , onChange , onSubmit } : Props) =>{

  // const [value , setValue ] = useState("")

  // const onSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
  //   e.preventDefault();
  //   onInsert(value);
  //   setValue("");
  // }

  // const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  //   setValue(e.target.value);
  // }


  return <div className = {styles.input}>
    <form onSubmit={onSubmit}>
      <input placeholder = "할 일을 입력하세요" value={input} onChange = {onChange}/>
      <button type = "submit" > 추가</button>
    </form>
  </div>
}

export default TodoInput;
