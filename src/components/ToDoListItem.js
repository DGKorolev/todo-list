import React, {useState} from 'react';
import {Box, Grid, IconButton, Input, ListItem, makeStyles, Typography} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Task from "../services/task";
import {useFetch} from "../hooks/useFetch";

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

const ToDoListItem = ({task, setTasks, setError}) => {

    let classes = useStyles()

    const [hiddenInput, setHiddenInput] = useState(true)


    const deleteFetch = useFetch(async (id) => {
        await Task.delete(task.uuid)
        setTasks(state => [...state].filter(item => item.uuid !== id))
    }, setError)


    const clickDeleteHandler = async (e) => {
        e.stopPropagation()
        deleteFetch(task.uuid)
    }


    const editFetch = useFetch(async (id, editData) => {

        const editTask = await Task.edit(id, editData)

        setTasks(state => ([...state].map(item => {
                if (item.uuid === task.uuid) return editTask
                return item
            })
        ))

    }, setError)

    const inputKeyDownHandler = (e) => {

        if (e.code === "Enter") {
            editFetch(task.uuid, {name: e.target.value})
            setHiddenInput(true)
        }

        if (e.code === "Escape") {
            setHiddenInput(true)
        }

    }

    const clickConfirmHandler = (e) => {
        e.stopPropagation()
        editFetch(task.uuid, {done: true})
    }

    const clickTaskHandler = (e) => {
        e.stopPropagation()
        setHiddenInput(false)
    }


    return (
        <ListItem
            className={task.done ? [classes.listItem, classes.completed].join(' ') : classes.listItem}
            onClick={clickTaskHandler}
        >
            <Grid container justifyContent="space-between" alignItems="center">
                <Box>
                    <IconButton
                        size="small"
                        onClick={clickConfirmHandler}
                        className="icon-button"
                    >
                        <CheckCircleOutlineIcon/>
                    </IconButton>
                    {hiddenInput
                        ? <Typography component="span">{task.name}</Typography>
                        : <Input
                            autoFocus
                            onBlur={() => setHiddenInput(true)}
                            onKeyDown={inputKeyDownHandler}
                            defaultValue={task.name}
                        />
                    }
                </Box>

                <Box>
                    <Typography component="span">{task.createdAt.substr(0, 10)}</Typography>
                    <IconButton
                        size="small"
                        onClick={clickDeleteHandler}
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