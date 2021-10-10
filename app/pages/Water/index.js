import React, { Component, useState, useEffect } from "react";
import styles from "./Water.module.scss";
import { Header } from "../../components/Header";

const Water = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(0);

  const onChangeForm = (e) => {
    const tmpUser = {};
    if (e.target.name === "firstname") {
      tmpUser.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      tmpUser.lastName = e.target.value;
    } else if (e.target.name === "email") {
      tmpUser.email = e.target.value;
    }
    setUser({ ...user, ...tmpUser });
  };

  return (
    <div className={styles.base}>
      <Header></Header>
      <div className={styles.body}>
        <h2>Water Tracker</h2>
      </div>
    </div>
  );
};

export default Water;
