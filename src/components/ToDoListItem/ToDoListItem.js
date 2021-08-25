import React from 'react';
import classes from './styles.module.css';

const ToDoListItem = ({toDoListItem, setToDoListItems}) => {

    const deleteItem = () => {
        setToDoListItems(state => [...state].filter(item => item.id !== toDoListItem.id))
    }

    const markCompleted = () => {
        setToDoListItems(state => {
            const newState = [...state]
            newState.find(item => item.id === toDoListItem.id).completed = true
            return [...newState]
        })
    }

    return (
        <li className={toDoListItem.completed ? [classes.listItem, classes.completed].join(' '): classes.listItem}>
            <div className={classes.listItemLeft}>
                <button
                    onClick={markCompleted}
                    className="icon-button"
                >
                    <i className="far fa-check-circle todo-icon"/>
                </button>
                <span>{toDoListItem.value}</span>
            </div>
            <div className={classes.listItemRight}>
                <span>{toDoListItem.date}</span>
                <button
                    onClick={deleteItem}
                    className="icon-button"
                >
                    <i className="fas fa-shopping-basket todo-icon"/>
                </button>
            </div>
        </li>
    );
};

export default ToDoListItem;