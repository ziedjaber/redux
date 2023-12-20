import {ADD_TODO,DELETE_TODO,EDIT_TODO,FILTER_TODOS,TOGGLE_TODO} from '../constants/actions-types' 

const initialstate = {
    todos: [
      {
        id:1,
        description:"redux chek point",
        isDone:true
      },
      {
        id:2,
        description:"face to face router",
        isDone:false
      }
    ],
    nextId: 3,
  };
  
  const todoReducer = (state = initialstate, action) => {
    switch (action.type) {
      case ADD_TODO:
        const newTodo = { id: state.nextId, description: action.payload.description , isDone:action.payload.isDone};
        return {
          ...state,
          todos: [...state.todos, newTodo],
          nextId: state.nextId + 1,
        };
  
      //   {id:,description}
  
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, description: action.payload.description }
              : todo
          ),
        };
  
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
        case TOGGLE_TODO:
          return {
            ...state,
            todos: state.todos.map((todo) =>
              todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            ),
          };
          case FILTER_TODOS:
            return {
              ...state,
              filter: action.payload,
            };
      default:
        return state;
    }
  };
  export default todoReducer;