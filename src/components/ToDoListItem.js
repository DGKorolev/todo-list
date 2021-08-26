import React, {useState} from 'react';
import {Box, Grid, IconButton, Input, ListItem, makeStyles, Typography} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Task from "../services/task";

const useStyles = makeStyles((theme) => ({

    listItem: {
        borderRadius: '5px',
        border: '1px solid' + theme.palette.grey["400"],
        marginTop: theme.spacing(1)
    },
    completed: {
        background: '#eaffe9',
        transition: 'all .4s',
        borderColor: theme.palette.success.main
    },
    hiddenInput: {
        width: "100px",
    }

}))

const ToDoListItem = ({toDoListItem, setToDoListItems, setError}) => {

    let classes = useStyles()

    const [hiddenInput, setHiddenInput] = useState(true)

    const deleteItem = async (e) => {
        e.stopPropagation()

        try {

            const res = await Task.delete(toDoListItem.uuid)
            setToDoListItems(state => [...state].filter(item => item.uuid !== toDoListItem.uuid))

        }catch (e){
            setError(e.message)
        }

    }

    const markCompleted = (e) => {
        e.stopPropagation()
        editTask({done: true})
    }

    const editModeToDoItem = (e) => {
        e.stopPropagation()
        setHiddenInput(false)
    }

    const handlerInputConfirm = (e) => {

        if (e.code === "Enter") {
            editTask({name: e.target.value})
            setHiddenInput(true)
        }


        if (e.code === "Escape") {
            setHiddenInput(true)
        }

    }

    const editTask = async (editProp) => {

        try {

            const editTask = await Task.edit(toDoListItem.uuid, editProp)

            setToDoListItems(state => ([...state].map(task => {
                    if (task.uuid === toDoListItem.uuid) return editTask
                    return task
                })
            ))

        } catch (e) {
            setError(e.message)
        }

    }


    return (
        <ListItem
            className={toDoListItem.done ? [classes.listItem, classes.completed].join(' ') : classes.listItem}
            onClick={editModeToDoItem}
        >
            <Grid container justifyContent="space-between" alignItems="center">
                <Box>
                    <IconButton
                        size="small"
                        onClick={markCompleted}
                        className="icon-button"
                    >
                        <CheckCircleOutlineIcon/>
                    </IconButton>
                    {hiddenInput
                        ? <Typography component="span">{toDoListItem.name}</Typography>
                        : <Input
                            autoFocus
                            onBlur={() => setHiddenInput(true)}
                            onKeyDown={handlerInputConfirm}
                            defaultValue={toDoListItem.name}
                        />
                    }
                </Box>

                <Box>
                    <Typography component="span">{toDoListItem.createdAt.substr(0, 10)}</Typography>
                    <IconButton
                        size="small"
                        onClick={deleteItem}
                        className="icon-button"
                    >
                        <DeleteForeverIcon/>
                    </IconButton>
                </Box>
            </Grid>
        </ListItem>
    );
};

export default ToDoListItem;