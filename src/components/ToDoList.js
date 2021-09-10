import React, {useState} from 'react';
import ToDoListItem from "./ToDoListItem";
import {List} from "@material-ui/core";
import {DESC} from "./Filter";

const ToDoList = ({displayedTasks, editTaskFetch, deleteTaskFetch, changePosition, tasks, filter}) => {

    const [currentTask, setCurrentTask] = useState({})

    const getDragAndDrop = (task) => ({

        dragStartHandler: (e) => {
            setCurrentTask(task)
        },

        dragLeaveHandler: (e) => {
            console.log('Leave')
            e.target.style.transform = '';
        },

        dragOverHandler: (e) => {
            e.preventDefault()
            e.target.style.transform = 'scale(1.03)';
        },

        dragEndHandler: (e) => {

        },

        onDropHandler: (e) => {
            e.preventDefault()

            const res = tasks.reduce((res, taskItem) => {

                if (currentTask.menu_position > task.menu_position) {
                    return taskItem.menu_position > task.menu_position && taskItem.menu_position < res ? taskItem.menu_position : res
                }

                return taskItem.menu_position < task.menu_position && taskItem.menu_position > res ? taskItem.menu_position : res

            }, currentTask.menu_position)


            const newMenuPosition = task.menu_position - Math.ceil((res - task.menu_position) / 2)

            console.log(newMenuPosition)

            editTaskFetch(currentTask.id, {
                menu_position: newMenuPosition
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