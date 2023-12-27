import { useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [deuDate, setDeuDate] = useState("");

  const handleNameChange = (value) => {
    setTodoName(value);
  };
  const handleDueDateChange = (value) => {
    setDeuDate(value);
  };

  const handleAddButtonClick = () => {
    handleNewItem(todoName, deuDate);
    setTodoName("");
    setDeuDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={deuDate}
            onChange={(e) => handleDueDateChange(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddButtonClick}
            // onClick={() => handleNewItem(todoName, deuDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
