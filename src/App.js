import './App.css';
import Filter from "./components/Filter";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useRef, useState} from "react";
import {convertAndGetTime} from "./library/library";
import {Container, Grid, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Tasks from "./services/tasks";


export const ALL = 'all'
export const DONE = 'done'
export const UNDONE = 'undone'



function App() {


    const [toDoListItems, setToDoListItems] = useState([])

    const [filter, setFilter] = useState({
        sortDirection: true,
        filterType: ALL,
    })

    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })

    const filteredAndSortedToDoListItems = useRef([])

    useEffect(() => {
        Tasks.getAll().then(r => {
            console.log(r)
        })
    }, [])

    useEffect(() => {
        setToDoListItems(state => {

            return [...state].sort((a, b) => {
                return filter.sortDirection
                    ? convertAndGetTime(b.date) - convertAndGetTime(a.date)
                    : convertAndGetTime(a.date) - convertAndGetTime(b.date)
            })

        })

    }, [filter.sortDirection])

    useEffect(() => {

        switch (filter.filterType) {
            case DONE:
                filteredAndSortedToDoListItems.current = [...toDoListItems.filter(item => item.completed)]
                break
            case UNDONE:
                filteredAndSortedToDoListItems.current = [...toDoListItems.filter(item => !item.completed)]
                break
            default: //ALL
                filteredAndSortedToDoListItems.current = [...toDoListItems]
                break
        }

    }, [toDoListItems, filter])

    useEffect(() => {
        setPaginate(state => ({...state, page: 1}))
    }, [filter.filterType])


    const showToDoListItems = filteredAndSortedToDoListItems.current.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)



    return (
        <div className="App">
            <Container maxWidth="sm">
                <Grid container direction="column">
                    <Typography variant="h4" component="h1" align="center">ToDo</Typography>
                    <InputForm addItem={setToDoListItems}/>

                    <Filter setFilter={setFilter}/>
                    <ToDoList showToDoListItems={showToDoListItems} setToDoListItems={setToDoListItems}/>
                    <Pagination
                        count={Math.ceil(filteredAndSortedToDoListItems.current.length / paginate.limit)}
                        onChange={(e, page) => setPaginate(state => ({...state, page}))}
                        page={paginate.page}
                        className='todo-pagination'
                    />
                </Grid>
            </Container>
        </div>
    );
}

export default App;
