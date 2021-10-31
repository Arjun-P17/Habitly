const express = require("express");
const path = require("path");
const app = express(),
    bodyParser = require("body-parser");
port = 3080;

// Drink Data Structure
const userDrinkData = {
    history: [],
};

const exercise = {
    workouts: [],
    history: [],
};

const user = {
    drinkData: userDrinkData,
    exerciseData: exercise,
};

// place holder for the data
const users = [user];

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/out')));

// Drink API calls
app.get("/api/getUserDrinks", (req, res) => {
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

// Exercise API calls
app.get("/api/getExerciseData", (req, res) => {
    res.json(users[0].exerciseData);
});

app.post("/api/addWorkout", (req, res) => {
    const workoutData = req.body.workoutData;
    exercise.workouts.push(workoutData);
    res.json("Workout Added");
});

app.post("/api/addWorkoutToHistory", (req, res) => {
    const workoutData = req.body.workoutData;
    exercise.history.push(workoutData);
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
