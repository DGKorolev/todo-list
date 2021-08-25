import React from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import classes from './styles.module.css'

const ToDoList = ({showToDoListItems, setToDoListItems}) => {

    return (
        <ul className={classes.todoList}>
            {showToDoListItems.map(toDoListItem =>
                <ToDoListItem key={toDoListItem.id} toDoListItem={toDoListItem} setToDoListItems={setToDoListItems} />
            )}
        </ul>
    );
};

export default ToDoList;