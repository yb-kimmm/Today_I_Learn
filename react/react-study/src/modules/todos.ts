import { Todo } from "../App";

import { createAction } from "redux-actions";
import { createReducer }  from "typesafe-actions"

const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT" 
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS"
const REMOVE_TODO = "REMOVE_TODO" 
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS"
const RESTORE = "RESTORE"
const CHANGE_FILTER = "CHANGE_FILTER";

export const changeTodoInput = createAction(CHANGE_TODO_INPUT , (input : string) => input);
export const addTodo = createAction(ADD_TODO , (input : string) => ({
  text : input , 
  done : false , 
}))

export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS , (id:number) => id);
export const removeTodo  = createAction(REMOVE_TODO , (id :number ) => id);
export const clearAllTodos = createAction(CLEAR_ALL_TODOS);
export const restore = createAction(RESTORE , (data : string) => data);
export const changeFilter = createAction(CHANGE_FILTER , (filter: string) => filter);
// export const changeTodoInput = ( input : string) =>({
//   type : CHANGE_TODO_INPUT , 
//   input
// })

// export const addTodo = (input : string) => ({
//   type : ADD_TODO , 
//   todo : {
//     text : input , 
//     done : false
//   }
// }) 

// export const toggleTodoStatus = (id : number) => ({
//   type : TOGGLE_TODO_STATUS,
//   id ,
// })

// export const removeTodo = (id : number) => ({
//   type : REMOVE_TODO , 
//   id ,
// })

// export const clearAllTodos = () => ({
//   type : CLEAR_ALL_TODOS
// })

export interface TodoState { 
  input : string ; 
  todos : Todo[];
  nextTodoId : number;
  filter : string;
}

const initialState : TodoState = {
  input : "",
  todos : [],
  nextTodoId : 1 ,
  filter : "ALL"
}

const todos = createReducer (
  initialState , {
    [CHANGE_TODO_INPUT] : (state , {payload : input}) => ({ 
      ...state ,
      input : input
    }),
    [ADD_TODO] : (state , {payload : todo}) => {
      const newTodo = {...todo, id : state.nextTodoId};
      const nextTodoId = state.nextTodoId + 1;
      return ({
        ...state , 
        todos: state.todos.concat(newTodo),
        nextTodoId
      })
    } ,
    [TOGGLE_TODO_STATUS] : (state , {payload : id}) => ({
      ...state , 
      todos : state.todos.map((todo) =>
        todo.id === id ? {...todo , done : !todo.done } : todo
      ) ,
    }) ,
    [REMOVE_TODO] : (state , {payload : id}) => ({
      ...state , 
      todos : state.todos.filter((todo) => todo.id !== id),
    }) ,
    [CLEAR_ALL_TODOS] : (state , action) => ({
      ...state , 
      todos : [],
    }) ,

    [RESTORE] : (state , action) => {
      console.log(action);
      console.log(action.payload.todos);
      console.log(action.payload.nextTodoId);
      return ({
        ...state ,
        todos : action.payload.todos,
        nextTodoId : action.payload.nextTodoId
      })
    } ,
    [CHANGE_FILTER] : (state , {payload : filter}) => ({
      ...state , 
      filter : filter 
    })
  }
)

export default todos;
