import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./WorkoutForm.module.scss";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const WorkoutForm = ({
    setType,
    setName,
    setDuration,
    exercises,
    setExercises,
}) => {
    const addExercise = () => {
        setExercises([...exercises, { name: " ", sets: 0, reps: 0 }]);
    };

    const removeExercise = () => {
        if (exercises.length > 1) {
            let tmpExercises = [...exercises];
            tmpExercises.pop();
            setExercises(tmpExercises);
        }
    };

    const updateExerciseName = (e, index) => {
        let tmpExercises = [...exercises];
        tmpExercises[index].name = e.target.value;
        setExercises(tmpExercises);
    };

    const updateExerciseSets = (e, index) => {
        let tmpExercises = [...exercises];
        tmpExercises[index].sets = e.target.value;
        setExercises(tmpExercises);
    };

    const updateExerciseReps = (e, index) => {
        let tmpExercises = [...exercises];
        tmpExercises[index].reps = e.target.value;
        setExercises(tmpExercises);
    };

    return (
        <Form>
            <Form.Group
                as={Row}
                className="mb-3"
                onChange={(e) => {
                    setType(e.target.value);
                }}
            >
                <Form.Label as="legend" column sm={2}>
                    Workout Type
                </Form.Label>

                <Col sm={10} className="mt-2">
                    <Form.Check
                        inline
                        defaultChecked
                        type="radio"
                        label="Lifting"
                        value="Lifting"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Cardio"
                        value="Cardio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formWorkoutName"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            >
                <Form.Label column sm={2}>
                    Workout Title
                </Form.Label>
                <Col sm={10}>
                    <Form.Control required type="text" placeholder="" />
                </Col>
            </Form.Group>

            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formWorkoutDuration"
                onChange={(e) => {
                    setDuration(e.target.value);
                }}
            >
                <Form.Label column sm={2}>
                    Est. Duration
                </Form.Label>
                <Col sm={10}>
                    <Form.Control required type="text" placeholder="" />
                </Col>
            </Form.Group>
            <Row className="pt-4" />
            {exercises.map((exercise, index) => (
                <Row key={index}>
                    <Form.Group
                        as={Col}
                        md="6"
                        controlId="exerciseName"
                        onChange={(e) => updateExerciseName(e, index)}
                    >
                        <Form.Control
                            type="text"
                            placeholder="Exercise Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="3"
                        controlId="exerciseSets"
                        onChange={(e) => updateExerciseSets(e, index)}
                    >
                        <Form.Control
                            type="number"
                            placeholder="Sets"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="3"
                        controlId="exerciseReps"
                        onChange={(e) => updateExerciseReps(e, index)}
                    >
                        <Form.Control
                            type="number"
                            placeholder="Reps"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid number for Reps.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            ))}
            <Button className={`${styles["btn-blue"]}`} onClick={addExercise}>
                Add Exercise
            </Button>
            <Button
                variant="danger"
                className={`mx-2 ${styles["btn-red"]}`}
                onClick={removeExercise}
            >
                Remove Exercise
            </Button>
        </Form>
    );
};

export default WorkoutForm;

WorkoutForm.propTypes = {};
