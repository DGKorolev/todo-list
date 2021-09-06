import React from 'react';
import ToDoListItem from "./ToDoListItem";
import {List} from "@material-ui/core";

const ToDoList = ({displayedTasks, editTaskFetch, deleteTaskFetch}) => {

    return (
        <List>
            {displayedTasks.map(task =>
                <ToDoListItem key={task.id} task={task} editTaskFetch={editTaskFetch} deleteTaskFetch={deleteTaskFetch}/>
            )}
        </List>
    );
};

export default ToDoList;