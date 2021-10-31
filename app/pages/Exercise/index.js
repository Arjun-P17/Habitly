import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./Exercise.module.scss";
import { Header } from "../../components/Header";
import { WorkoutTile } from "../../components/WorkoutTile";
import { AddWorkoutModal } from "../../components/AddWorkoutModal";
import { AddWorkoutHistoryModal } from "../../components/AddWorkoutHistoryModal";

import { isNumeric } from "../../utils/regex";
import {
    getExerciseDataAPI,
    addWorkoutAPI,
    addWorkoutToHistoryAPI,
} from "../../api/api";
import { PlusSquare } from "react-bootstrap-icons";

const FullCalendar = dynamic(() => import("../../components/FullCalendar"), {
    ssr: false,
});

const Exercise = () => {
    const [userExerciseData, setUserExerciseData] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const [workoutHistory, setWorkoutHistory] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [workoutHistoryModalShow, setWorkoutHistoryModalShow] =
        useState(false);

    // States to add workout to history
    const [workoutDate, setWorkoutDate] = useState(null);

    // States to create Workout
    const [type, setType] = useState("Lifting");
    const [name, setName] = useState(null);
    const [duration, setDuration] = useState(null);
    const [exercises, setExercises] = useState([
        { name: " ", sets: 0, reps: 0 },
    ]);

    // Reset current exercises state
    const resetExercises = () => {
        setExercises([{ name: " ", sets: 0, reps: 0 }]);
    };

    // Get all user exercise data
    const getUserExerciseData = () => {
        getExerciseDataAPI().then((data) => {
            setUserExerciseData(data);
        });
    };

    const addUserWorkout = (data) => {
        addWorkoutAPI(data).then((response) => {
            getUserExerciseData();
        });
    };

    const addUserWorkoutHistory = (data) => {
        addWorkoutToHistoryAPI(data).then((response) => {
            getUserExerciseData();
        });
    };

    // Add new workout to User
    const addWorkout = () => {
        const workoutID = workouts.length + 1;
        const newWorkout = {
            id: workoutID,
            type: type,
            name: name,
            duration: duration,
            exercises: exercises,
        };
        addUserWorkout(newWorkout);
        resetExercises();
        setModalShow(false);
    };

    // Add workout to user exercise history
    const addWorkoutToHistory = (workoutID, workoutName, workoutTime) => {
        const newWorkoutHistory = {
            start: workoutDate,
            time: workoutTime,
            workoutID: workoutID,
            workoutName: workoutName,
        };
        console.log(newWorkoutHistory);
        addUserWorkoutHistory(newWorkoutHistory);
        setWorkoutHistoryModalShow(false);
    };

    useEffect(() => {
        getUserExerciseData();
    }, []);

    useEffect(() => {
        console.log(workoutHistory);
    }, [workoutHistory]);

    useEffect(() => {
        if (userExerciseData?.workouts) {
            setWorkouts(userExerciseData.workouts);
        }
        if (userExerciseData?.history) {
            setWorkoutHistory(userExerciseData.history);
        }
    }, [userExerciseData]);

    return (
        <div className={styles.base}>
            <Header></Header>
            <div className={styles.body}>
                <h3>Workouts</h3>
                <div className={styles.workouts}>
                    {workouts.map((workout, index) => (
                        <div className={styles["tile-container"]} key={index}>
                            <WorkoutTile
                                name={workout.name}
                                exercises={workout.exercises}
                            />
                        </div>
                    ))}
                    <button
                        className={styles["tile-container"]}
                        onClick={() => setModalShow(true)}
                    >
                        <div className={styles["add-workout"]}>
                            <div className={styles.icon}>
                                <PlusSquare size={22} />
                            </div>
                            <div className={styles.text}>Add Workout</div>
                        </div>
                    </button>
                </div>
                <h3 className="py-4">Exercise History</h3>
                <div className={styles["exercise-tracker"]}>
                    <FullCalendar
                        workoutHistory={workoutHistory}
                        setWorkoutDate={setWorkoutDate}
                        showModal={() => setWorkoutHistoryModalShow(true)}
                    />
                </div>
            </div>
            <AddWorkoutModal
                setType={setType}
                setName={setName}
                setDuration={setDuration}
                exercises={exercises}
                setExercises={setExercises}
                show={modalShow}
                onHide={() => setModalShow(false)}
                addWorkout={addWorkout}
            />
            <AddWorkoutHistoryModal
                date={workoutDate}
                workouts={workouts}
                show={workoutHistoryModalShow}
                onHide={() => setWorkoutHistoryModalShow(false)}
                addWorkoutToHistory={addWorkoutToHistory}
            />
        </div>
    );
};

export default Exercise;
