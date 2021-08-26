import React from 'react';
import ToDoListItem from "./ToDoListItem";
import {List} from "@material-ui/core";

const ToDoList = ({showToDoListItems, setToDoListItems}) => {

    return (
        <List>
            {showToDoListItems.map(toDoListItem =>
                <ToDoListItem key={toDoListItem.uuid} toDoListItem={toDoListItem} setToDoListItems={setToDoListItems} />
            )}
        </List>
    );
};

export default ToDoList;