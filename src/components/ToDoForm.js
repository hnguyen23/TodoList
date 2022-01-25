/*
Basic form that will allow user to insert task names (hit enter or click button), and have function fire to add the task
Keep track of the changes as we go
*/
import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task name" />
            <button>Submit</button>
        </form>
    )
}

export default ToDoForm;