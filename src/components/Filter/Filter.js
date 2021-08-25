import React from 'react';
import {ALL, DONE, UNDONE} from "../../App";
import classes from "./styles.module.css"

const Filter = ({setFilter}) => {

    const handlerFilterButton = (filterType) => {
        return () => setFilter(state => ({...state, filterType}))
    }

    const handlerSortButton = (ascending) => {
        return () => setFilter(state => ({...state, sortDirection: ascending}))
    }

    return (
        <div className={classes.filterPanel}>
            <div className={classes.filterButtons}>
                <button
                    onClick={handlerFilterButton(ALL)}
                >
                    All
                </button>
                <button
                    onClick={handlerFilterButton(DONE)}
                >
                    Done
                </button>
                <button
                    onClick={handlerFilterButton(UNDONE)}
                >
                    Undone
                </button>
            </div>
            <div className={classes.sortButtons}>
                <span>Sort by Date</span>
                <button
                    onClick={handlerSortButton(true)}
                    className="icon-button"
                >
                    <i className="fas fa-arrow-up"/>
                </button>
                <button
                    onClick={handlerSortButton(false)}
                    className="icon-button"
                >
                    <i className="fas fa-arrow-down"/>
                </button>
            </div>
        </div>
    );
};

export default Filter;