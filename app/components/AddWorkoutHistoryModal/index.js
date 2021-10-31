import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const AddWorkoutHistoryModal = ({
    date,
    workouts,
    show,
    onHide,
    addWorkoutToHistory,
}) => {
    const [workoutID, setWorkoutID] = useState(null);
    const [workoutName, setWorkoutName] = useState(null);
    const [workoutTime, setWorkoutTime] = useState("10:00");

    const clearStates = () => {
        setWorkoutID(null);
        setWorkoutName(null);
        setWorkoutTime("10.00");
    };

    const onClick = (e) => {
        setWorkoutName(e.target.innerText);
    };

    const onSelect = (e) => {
        setWorkoutID(e);
    };

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
                    Add Workout To History
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="pb-1">
                        <Form.Label column lg={2}>
                            Date:
                        </Form.Label>

                        <Col className="pt-1">{date}</Col>
                    </Row>
                    <Form.Group
                        as={Row}
                        controlId="formWorkoutName"
                        onChange={(e) => {
                            setWorkoutTime(e.target.value);
                        }}
                    >
                        <Form.Label column sm={2}>
                            Time:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                required
                                type="time"
                                placeholder={workoutTime}
                            />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Form.Label column lg={2}>
                            Workout:
                        </Form.Label>
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={
                                    workoutName
                                        ? `${workoutName}`
                                        : "Select Workout"
                                }
                                onSelect={onSelect}
                            >
                                {workouts.map((workout, index) => {
                                    return (
                                        <Dropdown.Item
                                            eventKey={workout.id}
                                            onClick={onClick}
                                            key={index}
                                        >
                                            {workout.name}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    type="submit"
                    onClick={() => {
                        if (workoutTime && workoutName && workoutID) {
                            addWorkoutToHistory(
                                workoutID,
                                workoutName,
                                workoutTime
                            );
                            clearStates();
                        }
                    }}
                >
                    Add To History
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

AddWorkoutHistoryModal.propTypes = {};
