import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  const userInput = [{}];

  const onAddUser = (data) => {
    console.log("here " + data);
  };
  return (
    <div className="app">
      <AddUser onAddUserHandler={onAddUser} />
    </div>
  );
}

export default App;
