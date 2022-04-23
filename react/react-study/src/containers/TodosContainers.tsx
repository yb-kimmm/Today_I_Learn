import React  , {useCallback} from "react";
// import { connect } from "react-redux";
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

import {Todo} from "../App";


const TodosContainer = () =>{

  const {input , filter , todos } = useSelector((state : TodoState) => ({
    input : state.input , 
    todos : state.todos ,
    filter : state.filter
  }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback((input : string) => dispatch(changeTodoInput(input)) , [dispatch]) ;
  const onInsert = useCallback((input : string) =>  dispatch(addTodo(input)), [dispatch]) ;
  const onToggle  = useCallback((id : number) => dispatch(toggleTodoStatus(id)), [dispatch]) ;
  const onRemove = useCallback((id : number) => dispatch(removeTodo(id)), [dispatch]) ;
  const onClearAll = useCallback(() =>dispatch(clearAllTodos() ), [dispatch]) ;
  const onChangeFilter = useCallback((filter:string) => dispatch(changeFilter(filter)) , [dispatch]);


  const getFilteredTodos = (todos : Todo[] , filter : string) => {
    if (filter === "ALL") {
      return todos ; 
    }

    if( filter === "A"){
      return todos.filter((todo) => {
        return todo.done ===false ;
      });
    }

    if(filter === "B"){
      return todos.filter((todo) => {
        return todo.done === true;
      })
    }
  }

  const filteredTodos = getFilteredTodos(todos , filter);

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