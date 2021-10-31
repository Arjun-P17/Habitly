import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkoutTile.module.scss";

export const WorkoutTile = ({ name, exercises }) => {
    return (
        <div className={styles.base}>
            <h6 className={styles["workout-name"]}>{name}</h6>
            <div className={styles["exercise-container"]}>
                <table id="workout">
                    {exercises.map((exercise, index) => (
                        <tr id={index} key={index}>
                            <td>{exercise.name}</td>
                            <td>{exercise.sets}</td>
                            <td> x </td>
                            <td>{exercise.reps}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

WorkoutTile.propTypes = {
    name: PropTypes.string.isRequired,
    exercises: PropTypes.array.isRequired,
};
