import React  , {useCallback} from "react";
import { useSelector , useDispatch} from "react-redux"
import Todos from "../components/Todos";
import { TodoState} from "../modules/todos"
import { 
  changeTodoInput , 
  clearAllTodos , 
  toggleTodoStatus ,
  removeTodo ,
  addTodo ,
  changeFilter
} from "../modules/todos";

// import {Todo} from "../App";
import { getFilteredTodos } from "../modules/selector";

const TodosContainer = () =>{

  const { input , filter , filteredTodos } = useSelector((state : 
    TodoState) => ({
      input : state.input , 
      filter : state.filter , 
      filteredTodos : getFilteredTodos(state),
    }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback((input : string) => dispatch(changeTodoInput(input)) , [dispatch]) ;
  const onInsert = useCallback((input : string) =>  dispatch(addTodo(input)), [dispatch]) ;
  const onToggle  = useCallback((id : number) => dispatch(toggleTodoStatus(id)), [dispatch]) ;
  const onRemove = useCallback((id : number) => dispatch(removeTodo(id)), [dispatch]) ;
  const onClearAll = useCallback(() =>dispatch(clearAllTodos() ), [dispatch]) ;
  const onChangeFilter = useCallback((filter:string) => dispatch(changeFilter(filter)) , [dispatch]);

  return (
    <Todos
      input = {input}
      todos = {filteredTodos} 
      filter = {filter}
      onChangeInput = {onChangeInput}
      onInsert = {onInsert} 
      onToggle = {onToggle}
      onRemove = {onRemove}
      onClearAll = {onClearAll}
      onChangeFilter = {onChangeFilter}
    />
  )
}
export default TodosContainer;