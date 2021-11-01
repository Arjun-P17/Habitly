const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express(),
    bodyParser = require("body-parser");
port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/out')));

// Drink API calls
app.get("/api/getUserDrinks", (req, res) => {
    let rawdata = fs.readFileSync("./Data/data.json");
    let user = JSON.parse(rawdata);
    res.json(user.drinkData);
});

app.post("/api/addDrink", (req, res) => {
    const drinkData = req.body.drinkData;
    // console.log("Adding drink data", drinkData);
    let rawdata = fs.readFileSync("./Data/data.json");
    let user = JSON.parse(rawdata);
    user.drinkData.history.push(drinkData);
    let data = JSON.stringify(user);
    // console.log(data);
    fs.writeFileSync("./Data/data.json", data);
    res.json("Drink Added");
});

// Exercise API calls
app.get("/api/getExerciseData", (req, res) => {
    let rawdata = fs.readFileSync("./Data/data.json");
    let user = JSON.parse(rawdata);
    res.json(user.exerciseData);
});

app.post("/api/addWorkout", (req, res) => {
    const workoutData = req.body.workoutData;
    let rawdata = fs.readFileSync("./Data/data.json");
    let user = JSON.parse(rawdata);
    user.exerciseData.workouts.push(workoutData);
    let data = JSON.stringify(user);
    // console.log(data);
    fs.writeFileSync("./Data/data.json", data);
    res.json("Workout Added");
});

app.post("/api/addWorkoutToHistory", (req, res) => {
    const workoutData = req.body.workoutData;
    let rawdata = fs.readFileSync("./Data/data.json");
    let user = JSON.parse(rawdata);
    user.exerciseData.history.push(workoutData);
    let data = JSON.stringify(user);
    // console.log(data);
    fs.writeFileSync("./Data/data.json", data);
    res.json("Workout Added to History");
});

// User API calls
app.get("/api/users", (req, res) => {
    res.json(users);
});

app.post("/api/user", (req, res) => {
    const user = req.body.user;
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
