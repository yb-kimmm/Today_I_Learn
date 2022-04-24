import styles from "../Todo.module.css"
import {Todo} from "../App";
import React , {useState , useEffect} from "react";

interface Props {
  readonly todo : Todo;
  
  readonly onRemove:(id : number) => void;
  readonly onToggle:(id : number) => void;
}
const TodoItem = ({todo , onRemove, onToggle} : Props)=>{

  const { id , text , done} = todo;

  const [showInput , setShowInput] = useState(false);
  const [inputText , setInputText]  = useState("");

  const onDoubleClick = () => {
    console.log("onDoubleClick");

    setInputText(text);
    setShowInput(true);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log("onChange" + e.target.value);
    setInputText(e.target.value);
  }

  const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      console.log("handleKeyPress" + inputText);
      setShowInput(false);
    }
  }

  const handleBlur = () =>{
    console.log("handleBlur inputText" + inputText);
    setShowInput(false);
  }

  const editInput : React.RefObject<HTMLInputElement> = React.createRef();

  return <div className = {styles.item}>
    <input type = "checkbox" checked={done} onChange={()=> onToggle(id) }/>
    {showInput && (
        <input 
          value = {inputText}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          onBlur = {handleBlur}
          ref = {editInput}
        />
      )
    }
    <span>{text}</span>
    <button onClick = {()=> onRemove(id)}>삭제 </button>
  </div>
}


export default TodoItem;