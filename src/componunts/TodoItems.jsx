import React from "react";

function TodoItems({ todoName, todoDate, handleDeleteClick }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        {/* <div className="col-2">
         
           <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => handleUpdateClick(todoName,todoDate)}
          >
            Update
          </button>
        </div> */}
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn kg-bt"
            onClick={() => handleDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
