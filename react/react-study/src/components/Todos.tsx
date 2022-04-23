// import {TodoProvider} from "../contexts/todo";
// import TodosContainers from "../containers/TodosContainers";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoInput from "./TodoInput";
import { Todo } from "../App"
import TodoFilter from "./TodoFilter";

interface Props {
  readonly input : string;
  readonly todos ?: Todo[];
  readonly filter : string;
  readonly onRemove : (id:number ) => void;
  readonly onToggle : (id : number) => void;
  readonly onClearAll : () => void;
  readonly onInsert : (input : string) => void;
  readonly onChangeInput : (input : string) => void;
  readonly onChangeFilter : (filter : string) => void;
}

const Todos = ({
  input ,
  todos , 
  filter , 
  onChangeInput , 
  onInsert , 
  onToggle , 
  onRemove , 
  onClearAll ,
  onChangeFilter 
} : Props) => {
  return (
    <div>
      <TodoHeader />
      <TodoInput input={input} onInsert={onInsert} onChangeInput = {onChangeInput}/>
      <TodoFilter filter={filter} onChangeFilter= {onChangeFilter}/>
      <TodoList todos = {todos} onRemove= {onRemove} onToggle = {onToggle} />
      <TodoFooter onClearAll = {onClearAll} />
    </div>
  )
}

export default Todos;
// 
// import { useState , useRef  , useCallback } from "react";
// import { Todo } from "../App"
// const Todos = () => {
//   const [todos , setTodos] = useState<Todo[]>([]);
//   const nextId = useRef(1);

//   const [input , setInput] = useState("");

//   const onChange = useCallback((e : any ) => {
//     setInput(e.target.value);
//   } ,[]);

//   const onInsert= useCallback((text : string) =>{
//     const todo = {
//       id : nextId.current , 
//       text , 
//       done : false 
//     }

//     setTodos((todos) => todos.concat(todo));
//     nextId.current += 1;
//   },[]);

//   const onSubmit = useCallback((e : any)=> {
//     e.preventDefault();

//     onInsert(input);
//     setInput("");
//   } , [onInsert , input])


//   const onRemove =useCallback((id:number) =>{
//     setTodos((todos) => todos.filter((todo) => todo.id !== id));
//   },[])

//   const onToggle = useCallback((id:number) =>{
//     setTodos((todos) => todos.map((todo) =>(
//       todo.id === id ? {...todo , done : !todo.done} : todo
//     )))
//   },[]);

//   const onClearAll = useCallback(() =>{
//     setTodos(() => []);
//   },[])

//   return (
//     <div>
//       <TodoHeader/>
//       <TodoInput input={input} onChange= {onChange}  onSubmit={onSubmit}/>
//       <TodoList todos={todos}  onRemove={onRemove} onToggle={onToggle}/>
//       <TodoFooter onClearAll={onClearAll}/>

//     </div>
//   )
// }
