import {ADD_TODO,DELETE_TODO,EDIT_TODO,FILTER_TODOS,SET_FILTER,TOGGLE_TODO} from '../constants/actions-types' 
export const addTodo=(todo)=> {
    return { 
        type: ADD_TODO,
         payload: todo };
  }
  export const editTodo=(todo)=> {
    return { 
        type: EDIT_TODO,
         payload: todo };
  }
  export const deleteTodo=(id)=> {
    return { 
        type: DELETE_TODO,
         payload: id };
  }
  export const toggleTodo = (id)=> {
  
    return {
         type: TOGGLE_TODO,
          payload: id };
  };
  export const filterTodos =  (filterType)=>{
    
    return { 
        type: FILTER_TODOS,
         payload: filterType };
  };
  export const setFilter = (filter)=> {
  
    return { 
        type: SET_FILTER,
         payload: { filter } };
  };
  