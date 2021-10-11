const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

// Drink Data Structure
// userDrinkData = {
//   history: [
//     {
//       date: "2021-10-10 20:30:00",
//       type: "Water",
//       amount: "200",
//     },
//   ],
// };
const userDrinkData = {
  history: [],
};

const user = {
  drinkData: userDrinkData,
};

// place holder for the data
const users = [user];

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/out')));

// Drink API calls
app.get("/api/getUserDrinks", (req, res) => {
  console.log("api/getUserDrinks called!");
  res.json(users[0].drinkData);
});

app.post("/api/addDrink", (req, res) => {
  const drinkData = req.body.drinkData;
  console.log("Adding drink data", drinkData);
  userDrinkData.history.push(drinkData);
  res.json("Drink Added");
  console.log(users);
  console.log(userDrinkData);
});

// User API calls
app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, '../my-app/out/index.html'));
  res.send("hello0oo");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
