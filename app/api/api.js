export async function getAllUsers() {
    const response = await fetch("/api/users");
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: data }),
    });
    return await response.json();
}

export async function getUserDrinks() {
    const response = await fetch("/api/getUserDrinks");
    return await response.json();
}

export async function addDrink(data) {
    const response = await fetch(`/api/addDrink`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drinkData: data }),
    });
    return await response.json();
}

export async function getExerciseDataAPI() {
    const response = await fetch("/api/getExerciseData");
    return await response.json();
}

export async function addWorkoutAPI(data) {
    const response = await fetch(`/api/addWorkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workoutData: data }),
    });
    return await response.json();
}

export async function addWorkoutToHistoryAPI(data) {
    const response = await fetch(`/api/addWorkoutToHistory`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workoutData: data }),
    });
    return await response.json();
}
