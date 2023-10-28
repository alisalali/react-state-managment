import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(() => {
        return {
          title: "Invalid inputs ",
          message: "Please enter a valid name and age (non-empty values).",
        };
      });
      return;
    }
    if (+enteredAge < 1) {
      setError(() => {
        return {
          title: "Invalid age ",
          message: "Please enter a valid age (> 0).",
        };
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const onErrorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name=""
            id="username"
            value={enteredUsername}
            onChange={usernameHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name=""
            id="age"
            value={enteredAge}
            onChange={ageChangedHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
