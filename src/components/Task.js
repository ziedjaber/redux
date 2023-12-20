import { useState } from "react";
import { editTodo, deleteTodo ,toggleTodo} from "../JS/actions/actions";
import { useDispatch } from "react-redux";

const  Task = ({ id, description ,isDone })=> {
  const [editing, setEditing] = useState(false);
  const [newDescription ,setNewDescription] = useState(description);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newDescription.trim()) {
      dispatch(editTodo({ id: id, description: newDescription ,isDone:false}));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleDoubleClick=()=>{
    dispatch(toggleTodo(id));};
  
  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item" >
          <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}
        onDoubleClick={handleDoubleClick} >{description}</p>
          <div className="actions">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Task;
