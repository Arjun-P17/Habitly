import React, { useState, useEffect } from "react";
import styles from "./Exercise.module.scss";
import { Header } from "../../components/Header";
import { WorkoutTile } from "../../components/WorkoutTile";
import { isNumeric } from "../../utils/regex";
import { getUserDrinks, addDrink } from "../../api/api";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Exercise = () => {
  const [userWorkoutData, setUserWorkoutData] = useState({});
  const [workouts, setWorkouts] = useState([]);

  //   const getDrinkData = () => {
  //     getUserDrinks().then((data) => {
  //       console.log(data);
  //       setUserDrinkData(data);
  //     });
  //   };

  //   const addDrinkData = (data) => {
  //     addDrink(data).then((response) => {
  //       console.log(response);
  //       getDrinkData();
  //     });
  //   };

  //   const onDrinkAmountChange = (e) => {
  //     console.log(isNumeric(e.target.value));
  //     if (isNumeric(e.target.value)) {
  //       setDrinkAmount(e.target.value);
  //     } else {
  //       setDrinkAmount(0);
  //     }
  //   };

  //   const onAddDrink = (e) => {
  //     if (drinkAmount > 0) {
  //       console.log("Adding " + drink + ": " + drinkAmount);
  //       const date = new Date();
  //       const drinkData = {
  //         date: date.toString(),
  //         type: drink,
  //         amount: drinkAmount,
  //       };
  //       addDrinkData(drinkData);
  //     }
  //   };

  return (
    <div className={styles.base}>
      <Header></Header>
      <div className={styles.body}>
        <h2>Exercise Tracker</h2>
        <div className={styles.workouts}>
          <WorkoutTile name="Workout 1" />
        </div>
      </div>
    </div>
  );
};

export default Exercise;
