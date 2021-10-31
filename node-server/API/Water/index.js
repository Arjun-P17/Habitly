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
