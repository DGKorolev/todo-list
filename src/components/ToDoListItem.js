import React, {useState} from 'react';
import {Box, Grid, IconButton, Input, ListItem, makeStyles, Typography} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
    hiddenInput : {
        width: "100px",
    }

}))

const ToDoListItem = ({toDoListItem, setToDoListItems}) => {

    let classes = useStyles()

    const [hiddenInput, setHiddenInput] = useState(true)

    const deleteItem = (e) => {
        e.stopPropagation()
        setToDoListItems(state => [...state].filter(item => item.id !== toDoListItem.id))
    }

    const markCompleted = (e) => {
        e.stopPropagation()
        setToDoListItems(state => {
            const newState = [...state]
            newState.find(item => item.id === toDoListItem.id).completed = true
            return [...newState]
        })
    }

    const editModeToDoItem = (e) => {
        e.stopPropagation()
        setHiddenInput(false)
    }

    const handlerInputConfirm = (e) => {
        if (e.code === "Enter") {

            setToDoListItems(state => {
                const newState = [...state]
                newState.find(item => item.id === toDoListItem.id).value = e.target.value
                console.log(newState)
                return [...newState]

            })
            setHiddenInput(true)
        }

        if (e.code === "Escape") {
            setHiddenInput(true)
        }

    }


    return (
        <ListItem
            className={toDoListItem.completed ? [classes.listItem, classes.completed].join(' ') : classes.listItem}
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
                        ? <Typography component="span">{toDoListItem.value}</Typography>
                        : <Input
                            autoFocus
                            onBlur={() => setHiddenInput(true)}
                            onKeyDown={handlerInputConfirm}
                            defaultValue={toDoListItem.value}
                        />
                    }
                </Box>

                <Box>
                    <Typography component="span">{toDoListItem.date}</Typography>
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