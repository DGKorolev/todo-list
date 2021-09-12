import React, {useState} from 'react';
import ToDoListItem from "./ToDoListItem";
import {List} from "@material-ui/core";

const ToDoList = ({displayedTasks, editTaskFetch, deleteTaskFetch, changePosition}) => {

    const [currentTask, setCurrentTask] = useState({})

    const getDragAndDrop = (task) => ({

        dragStartHandler: () => {
            setCurrentTask(task)
        },

        dragLeaveHandler: (e) => {
            e.target.style.transform = '';
        },

        dragOverHandler: (e) => {
            e.preventDefault()
            e.target.style.transform = 'scale(1.03)';
        },

        onDropHandler: (e) => {
            e.preventDefault()

            const selectedTaskId = currentTask.id
            const targetTaskId = task.id

            if (targetTaskId === selectedTaskId) return


            editTaskFetch(currentTask.id, {
                change_position: {
                    selectedTaskId,
                    targetTaskId
                }
            })

        }

    })


    return (
        <List>
            {displayedTasks.length > 0 && displayedTasks.map(task =>
                <ToDoListItem
                    key={task.id}
                    task={task}
                    editTaskFetch={editTaskFetch}
                    deleteTaskFetch={deleteTaskFetch}
                    changePosition={changePosition}
                    dragAndDrop={getDragAndDrop(task)}
                />
            )}
        </List>


    );
};

export default ToDoList;