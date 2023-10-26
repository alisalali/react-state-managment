import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUserHandler(enteredUsername);
    console.log(enteredUsername, enteredAge);
  };
  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name=""
          id="username"
          onChange={usernameHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name=""
          id="age"
          onChange={ageChangedHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
