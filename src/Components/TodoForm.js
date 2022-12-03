import React, { useState } from "react";
import "../CSS/TodoForm.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { format } from "date-fns";
import { compareAsc } from "date-fns/esm/fp";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const eventsName = [
    "I need to attend my friends birthday",
    "I need to meet my friend to go to a hackathon",
    "Need to drop my kids to school",
    "Need to visit my hometown",
  ];

  const shouldShowCalender = () => {
    let showCalendar = false;
    eventsName.map((item) => {
      if (item === input) {
        showCalendar = true;
      } else {
        showCalendar = false;
      }
    });
    return showCalendar;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (dateOfEvent) {
      props.addTodo(input + "-" + dateOfEvent);
      //localStorage.setItem("todoList", input + "-" + dateOfEvent);
      setDateOfEvent("");
    } else {
      props.addTodo(input);
      //localStorage.setItem("todoList", input);
    }

    setInput("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="todo-form">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="todo-input"
          placeholder="Add a Todo..."
        />

        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
      {shouldShowCalender() ? (
        <DatePicker
          label="Select Date"
          renderInput={(props) => <TextField {...props} />}
          value={dateOfEvent}
          onChange={(eventDate) => {
            setDateOfEvent(format(eventDate, "MM/dd/yyyy"));
            // console.log(eventDate);
            // console.log(typeof format(eventDate, "dd/MM/yyyy"));
          }}
          closeOnSelect={true}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default TodoForm;
