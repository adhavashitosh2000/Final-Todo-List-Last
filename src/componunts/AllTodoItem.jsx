import React from "react";
import TodoItems from "./TodoItems";
import styles from "./AllTodoItem.module.css";

function AllTodoItem({ todosItems, handleDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todosItems.map((item, index) => (
        <TodoItems
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          // handleUpdateClick={handleUpdateClick}
          handleDeleteClick={handleDeleteClick}
        ></TodoItems>
      ))}
    </div>
  );
}

export default AllTodoItem;
