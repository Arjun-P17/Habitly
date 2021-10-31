import React, { useEffect } from "react";
import propTypes from "prop-types";
import styles from "./AddWorkoutModal.module.scss";
import WorkoutForm from "./WorkoutForm";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddWorkoutModal = ({
    setType,
    setName,
    setDuration,
    exercises,
    setExercises,
    show,
    onHide,
    addWorkout,
}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Workout
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <WorkoutForm
                        setType={setType}
                        setName={setName}
                        setDuration={setDuration}
                        exercises={exercises}
                        setExercises={setExercises}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="btn btn-primary btn-large centerButton"
                    type="submit"
                    onClick={addWorkout}
                >
                    Add Workout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

AddWorkoutModal.propTypes = {};
