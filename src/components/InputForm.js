import React, {useState} from 'react';
import {Input, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    inputForm: {
        padding: [theme.spacing(1), theme.spacing(1)].join(' '),
        marginTop: theme.spacing(2),
        width: '100%'
    }
}))


const InputForm = ({addItem}) => {

    const classes = useStyles()
    const [value, setValue] = useState('')

    const keyDownInputHandler = (e) => {
        if (e.code !== "Enter") return

        const newToDoListItem = {
            id: Date.now(),
            value,
            date: new Date().toLocaleDateString().replace(/\./g,'/')
        }

        addItem((toDoListState) => [...toDoListState, newToDoListItem])
        setValue('')
    }

    const changeInputHandler = (e) => {
        setValue(e.target.value)
    }


    return (
        <Input
            // className={classes.input_form}
            className={classes.inputForm}
            type="text"
            placeholder="i want to ..."
            value={value}
            onChange={changeInputHandler}
            onKeyDown={keyDownInputHandler}
        />
    );
};

export default InputForm;