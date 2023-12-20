import { useSelector } from "react-redux";
import Task from "./Task";
import {filterTodos } from "../JS/actions/actions";

import { useDispatch } from "react-redux";
const ListTask = ()=> {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleFilter = (filterType) => {
    dispatch(filterTodos(filterType));
  };

  const todosFiltred = todos.filter((todo) => {
    if (filter === 'done') {
      return todo.isDone;
    } else if (filter === 'notDone') {
      return !todo.isDone;
    } else {
      return true;
    }
  });
 
  return (<>
      <div className="btn-group" role="group" >
        <button type="button" className="btn btn-info "
         onClick={() => handleFilter('all')}>All</button>
        <button type="button" className="btn btn-success "
        onClick={() => handleFilter('done')}>Done</button>
        <button type="button" className="btn btn-danger " 
        onClick={() => handleFilter('notDone')}>Not Done</button>
      </div>
    <ul className="list-group mt-4">
      {todosFiltred.map((todo) => (
        <Task
        key={todo.id} id={todo.id} description={todo.description} isDone={todo.isDone}
        />
      ))}
    </ul>
   
    </>
  );
}

export default ListTask;
