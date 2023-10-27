import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/UserList/UsersList";
import { ErrorModel } from "./components/UI/ErrorModal";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUserList((pervUserList) => {
      return [
        ...pervUserList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(userList);
  };
  return (
    <div className="app">
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={userList}></UsersList>
    </div>
  );
}

export default App;
