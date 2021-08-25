import './App.css';
import Filter from "./components/Filter";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {convertAndGetTime} from "./library/library";
import {Container, Grid, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


export const ALL = 'all'
export const DONE = 'done'
export const UNDONE = 'undone'



function App() {


    const [toDoListItems, setToDoListItems] = useState([
        {id: 1, value: "Do something 1", date: "11/06/2020", completed: false},
        {id: 2, value: "Do something 2", date: "12/02/2020", completed: false},
        {id: 3, value: "Do something 3", date: "10/03/2020", completed: true},
        {id: 4, value: "Do something 4", date: "10/05/2020", completed: false},
        {id: 5, value: "Do something 5", date: "10/03/2020", completed: true},
        {id: 6, value: "Do something 6", date: "10/05/2020", completed: false},
        {id: 7, value: "Do something 7", date: "10/05/2020", completed: false},
        {id: 8, value: "Do something 8", date: "11/06/2020", completed: false},
        {id: 9, value: "Do something 9", date: "12/02/2020", completed: false},
        {id: 10, value: "Do something 10", date: "10/03/2020", completed: true},
        {id: 11, value: "Do something 11", date: "10/05/2020", completed: false},
        {id: 12, value: "Do something 12", date: "10/03/2020", completed: true},
        {id: 13, value: "Do something 13", date: "10/05/2020", completed: false},
        {id: 14, value: "Do something 14", date: "10/05/2020", completed: false},
    ])

    const filteredAndSortedToDoListItems = useRef([])

    const [filter, setFilter] = useState({
        sortDirection: true,
        filterType: ALL,
    })

    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })

    useEffect(() => {
        setToDoListItems(state => {

            return [...state].sort((a, b) => {
                return filter.sortDirection
                    ? convertAndGetTime(b.date) - convertAndGetTime(a.date)
                    : convertAndGetTime(a.date) - convertAndGetTime(b.date)
            })

        })

    }, [filter.sortDirection])

    useMemo(() => {

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

    }, [toDoListItems, filter.filterType])

    useMemo(() => {
        setPaginate(state => ({...state, page: 1}))
    }, [filter.filterType])


    const showToDoListItems = filteredAndSortedToDoListItems.current.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)



    return (
        <div className="App">
            <Container maxWidth="sm">
                <Grid direction="column" alignItems="center">
                    <Typography variant="h4" component="h1" align="center">ToDo</Typography>
                    <InputForm addItem={setToDoListItems}/>

                    <Filter setFilter={setFilter}/>
                    <ToDoList showToDoListItems={showToDoListItems} setToDoListItems={setToDoListItems}/>
                    <Pagination
                        borderCount={2}
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
