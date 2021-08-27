import React from 'react';
import ToDoListItem from "./ToDoListItem";
import {List} from "@material-ui/core";

const ToDoList = ({displayedTasks, setTasks, setError}) => {

    return (
        <List>
            {displayedTasks.map(task =>
                <ToDoListItem key={task.uuid} task={task} setTasks={setTasks} setError={setError}/>
            )}
        </List>
    );
};

export default ToDoList;