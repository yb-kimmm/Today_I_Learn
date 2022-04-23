import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { TodoState} from "../modules/todos";
import { Dispatch} from "redux";


import { 
  changeTodoInput , 
  clearAllTodos , 
  toggleTodoStatus ,
  removeTodo ,
  addTodo
} from "../modules/todos";

type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;

interface Props extends PropsState , PropsDispatch{}

const TodosContainer = ({
  input , 
  todos , 
  changeTodoInput , 
  addTodo , 
  toggleTodoStatus,
  removeTodo ,
  clearAllTodos 
} : Props) =>{
  return (
    <Todos
      input = {input}
      todos = {todos} 
      onChangeInput = {changeTodoInput}
      onInsert = {addTodo} 
      onToggle = {toggleTodoStatus}
      onRemove = {removeTodo}
      onClearAll = {clearAllTodos}
    />
  )
}

const mapStateToProps = (state : TodoState) =>({
  input : state.input,
  todos : state.todos,
});

const mapDispatchToProps = (dispatch:Dispatch) =>({
  changeTodoInput : (input : string)=> {
    dispatch(changeTodoInput(input));
  },
  clearAllTodos : () =>{
    dispatch (clearAllTodos());
  },
  addTodo : (input : string ) => {
    dispatch (addTodo(input));
  },
  toggleTodoStatus : (id : number) => {
    dispatch (toggleTodoStatus(id));
  },
  removeTodo : (id : number) => {
    dispatch(removeTodo(id))
  }
})

export default connect ( 
  mapStateToProps ,
  mapDispatchToProps,
)(TodosContainer);
