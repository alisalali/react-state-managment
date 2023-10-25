import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";


function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  const onInputHandler = (id, value) => {
    console.log(id, value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} class={classes["form-group"]}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name=""
          id="username"
          onChange={(event) => {
            onInputHandler(event.target.id, event.target.value);
          }}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name=""
          id="age"
          onChange={(event) => {
            onInputHandler(event.target.id, event.target.value);
          }}
        ></input>
        <Button type="button">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
