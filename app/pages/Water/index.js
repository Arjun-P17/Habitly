import React, { Component, useState, useEffect } from "react";
import styles from "./Water.module.scss";
import { Header } from "../../components/Header";
import { isNumeric } from "../../utils/regex";
import { getUserDrinks, addDrink } from "../../api/api";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Water = () => {
  const [userDrinkData, setUserDrinkData] = useState({});
  const [drink, setDrink] = useState("Water");
  const [drinkAmount, setDrinkAmount] = useState(0);

  const getDrinkData = () => {
    getUserDrinks().then((data) => {
      console.log(data);
      setUserDrinkData(data);
    });
  };

  const addDrinkData = (data) => {
    addDrink(data).then((response) => {
      console.log(response);
      getDrinkData();
    });
  };

  const onDrinkAmountChange = (e) => {
    console.log(isNumeric(e.target.value));
    if (isNumeric(e.target.value)) {
      setDrinkAmount(e.target.value);
    } else {
      setDrinkAmount(0);
    }
  };

  const onAddDrink = (e) => {
    if (drinkAmount > 0) {
      console.log("Adding " + drink + ": " + drinkAmount);
      const date = new Date();
      const drinkData = {
        date: date.toString(),
        type: drink,
        amount: drinkAmount,
      };
      addDrinkData(drinkData);
    }
  };

  return (
    <div className={styles.base}>
      <Header></Header>
      <div className={styles.body}>
        <h2>Water Tracker</h2>
        <div className={styles.addDrink}>
          <InputGroup>
            <DropdownButton
              variant="secondary"
              title={drink}
              onSelect={(e) => setDrink(e)}
              className={styles["add-drink-dropdown"]}
            >
              <Dropdown.Item eventKey="Water">Water</Dropdown.Item>
              <Dropdown.Item eventKey="Soft Drink">Soft Drink</Dropdown.Item>
              <Dropdown.Item eventKey="Milk">Milk</Dropdown.Item>
              <Dropdown.Item eventKey="Coffee">Coffee</Dropdown.Item>
              <Dropdown.Item eventKey="Tea">Tea</Dropdown.Item>
            </DropdownButton>
            <div className={styles["add-drink-input"]}>
              <FormControl
                placeholder="Quantity (mL)"
                aria-label="Quantity of Drink in milliliters"
                onChange={onDrinkAmountChange}
              />
            </div>
          </InputGroup>
          <Button
            className={styles["add-drink-btn"]}
            variant="primary"
            onClick={onAddDrink}
          >
            Add Drink
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Water;
