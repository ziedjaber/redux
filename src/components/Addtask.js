import { useDispatch} from "react-redux";
import { addTodo } from "../JS/actions/actions";
import { useState } from "react";


const AddTask=()=> {
  const dispatch = useDispatch();

  const [todoDescription, setTodoDescription] = useState("");
  const handleTodo = () => {
    if (todoDescription.trim()) {
      const newTodo = {
        description: todoDescription,
      };
      dispatch(addTodo(newTodo));
      setTodoDescription("");
    }
  };

  return (
    
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => handleTodo()}>
          Add
        </button>
      </div>
  
  );
}

export default AddTask;
