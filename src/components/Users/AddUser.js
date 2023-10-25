import React from "react";
import style from "./AddUser.module.css";
function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={style.card}>
      <form onSubmit={addUserHandler} class={style["form-group"]}>
        <label htmlFor="username">username</label>
        <input type="text" name="" id="username"></input>
        <label htmlFor="age">Age</label>
        <input type="number" name="" id="age"></input>
        <button type="button">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
