import AddTodo from "./componunts/AddTodo";
import AppName from "./componunts/AppName";
import "./App.css";
import AllTodoItem from "./componunts/AllTodoItem";
import WelcomeMsg from "./componunts/WelcomeMsg";
import { useState } from "react";

function App() {
  const [todosItems, setTodosItems] = useState([]);

  function handleNewItem(itemName, itemDueDate) {
    const newTodosItem = [
      ...todosItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodosItems(newTodosItem);
  }

  const handleDeleteItems = (todoItemName) => {
    const newTodoArray = todosItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodosItems(newTodoArray);
  };

  


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      {todosItems.length === 0 && <WelcomeMsg />}
      <AllTodoItem
        handleDeleteClick={handleDeleteItems}
        todosItems={todosItems}
      />
    </center>
  );
}

export default App;
