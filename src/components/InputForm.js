import React, {useState} from 'react';
import {Input, makeStyles} from '@material-ui/core'
import Task from "../services/task";
import {useFetch} from "../hooks/useFetch";

const useStyles = makeStyles((theme) => ({
    inputForm: {
        padding: [theme.spacing(1), theme.spacing(1)].join(' '),
        marginTop: theme.spacing(2),
        width: '100%'
    }
}))


const InputForm = ({setTasks, setError}) => {

    const classes = useStyles()
    const [name, setName] = useState('')

    const createTask = useFetch(async (name) => {
        const newToDo = await Task.creat(name)
        setTasks((toDoListState) => [...toDoListState, newToDo])
        setName('')
    }, setError)

    const keyDownInputHandler = (e) => {
        if(e.code === "Enter" && name.trim()) createTask(name)
    }

    const changeInputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <Input
                // className={classes.input_form}
                className={classes.inputForm}
                type="text"
                placeholder="i want to ..."
                value={name}
                onChange={changeInputHandler}
                onKeyDown={keyDownInputHandler}
            />

        </>
    );
};

export default InputForm;