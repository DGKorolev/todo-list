import React, {useState} from 'react';
import classes from './styles.module.css'


const Input = ({addItem}) => {

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


    return (
        <input
            className={classes.input_form}
            type="text"
            placeholder="i want to ..."
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={keyDownInputHandler}
        />
    );
};

export default Input;