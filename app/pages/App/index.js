import React, { Component, useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Users } from "../../components/Users";
import { DisplayBoard } from "../../components/DisplayBoard";
import CreateUser from "../../components/CreateUser";
import { getAllUsers, createUser } from "../../api/api";

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(0);

  const createUserApp = (e) => {
    createUser(user).then((response) => {
      console.log(response);
      setNumUsers(numUsers + 1);
    });
  };

  const getAllUsersApp = () => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumUsers(users.length);
    });
  };

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
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={user}
              onChangeForm={onChangeForm}
              createUser={createUserApp}
            ></CreateUser>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numUsers}
              getAllUsers={getAllUsersApp}
            ></DisplayBoard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users}></Users>
      </div>
    </div>
  );
};

export default App;
