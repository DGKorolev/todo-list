import React, {useState} from 'react';
import {Input, makeStyles} from '@material-ui/core'
import Task from "../services/task";

const useStyles = makeStyles((theme) => ({
    inputForm: {
        padding: [theme.spacing(1), theme.spacing(1)].join(' '),
        marginTop: theme.spacing(2),
        width: '100%'
    }
}))


const InputForm = ({addItem, setError}) => {

    const classes = useStyles()
    const [name, setName] = useState('')

    const keyDownInputHandler = async (e) => {

        if (e.code !== "Enter" || !name.trim()) return

        try {

            const newToDo = await Task.creat(name)
            addItem((toDoListState) => [...toDoListState, newToDo])

        }catch (e){
            setError(e.message)
        }


        setName('')

    }

    const changeInputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <Input
            // className={classes.input_form}
            className={classes.inputForm}
            type="text"
            placeholder="i want to ..."
            value={name}
            onChange={changeInputHandler}
            onKeyDown={keyDownInputHandler}
        />
    );
};

export default InputForm;