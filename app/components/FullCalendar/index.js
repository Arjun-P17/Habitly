import React, { useState, useEffect, useCallback } from "react";
import styles from "./FullCalendar.module.scss";
import Calendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";

const events = [
    {
        title: "Event 1",
        start: "2021-10-05T09:05:00",
        end: "2021-10-05T18:00:00",
        duration: "5 mins",
    },
    {
        title: "Event 2",
        start: "2021-10-08",
        end: "2021-10-10",
        duration: "5 mins",
    },
];

const buttonIcons = {
    prev: "chevron-left",
    next: "chevron-right",
};
const buttonText = {
    today: "Today",
    month: "Month",
    week: "Week",
    day: "Day",
    today: "Today",
    listMonth: "List Month",
    listYear: "List Year",
};

export default function FullCalendar({
    workoutHistory,
    setWorkoutDate,
    showModal,
}) {
    const [exerciseHistory, setExerciseHistory] = useState([]);

    useEffect(() => {
        const tmpExerciseHistory = [];
        workoutHistory.forEach((workout) => {
            const exerciseEntry = {
                title: workout.workoutName,
                start: `${workout.start}T${workout.time}`,
            };
            tmpExerciseHistory.push(exerciseEntry);
        });
        setExerciseHistory(tmpExerciseHistory);
    }, [workoutHistory]);

    const dateClick = (info) => {
        console.log(info);
        setWorkoutDate(info.dateStr);
        showModal();
    };

    const onDateSelect = (info) => {
        console.log(info);
    };

    return (
        <Calendar
            viewClassNames={styles.calendar}
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                listPlugin,
                interactionPlugin,
                bootstrapPlugin,
            ]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth listMonth,listYear",
            }}
            defaultView="listMonth"
            themeSystem="bootstrap"
            bootstrapFontAwesome={buttonIcons}
            buttonText={buttonText}
            events={exerciseHistory}
            showNonCurrentDates={true}
            fixedWeekCount={false}
            editable={true}
            // eventStartEditable={true}
            // eventResizableFromStart={true}
            // eventDurationEditable={true}
            selectable={true}
            dateClick={dateClick}
            select={onDateSelect}
        />
    );
}
