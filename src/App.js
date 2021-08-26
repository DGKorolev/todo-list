import './App.css';
import Filter from "./components/Filter";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useMemo, useState} from "react";
import {getTime} from "./library/library";
import {Container, Grid, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Task from "./services/task";
import Error from "./components/Error";


export const ALL = 'all'
export const DONE = 'done'
export const UNDONE = 'undone'


function App() {

    const [error, setError] = useState('')

    const [toDoListItems, setToDoListItems] = useState([])

    const [filter, setFilter] = useState({
        sortDirection: true,
        filterType: ALL,
    })

    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })

    const [filteredAndSortedToDoListItems, setFilteredAndSortedToDoListItems] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await Task.getAll()
            setToDoListItems(response)
        }

        fetchData()

    }, [])

    useEffect(() => {

        setToDoListItems(state => (
            [...state].sort((a, b) => (
                    filter.sortDirection
                        ? getTime(b.updatedAt) - getTime(a.updatedAt)
                        : getTime(a.updatedAt) - getTime(b.updatedAt)
                )
            )
        ))

    }, [filter.sortDirection])

    useEffect(() => {

        switch (filter.filterType) {
            case DONE:
                setFilteredAndSortedToDoListItems([...toDoListItems.filter(item => item.done)])
                break
            case UNDONE:
                setFilteredAndSortedToDoListItems([...toDoListItems.filter(item => !item.done)])
                break
            default: //ALL
                setFilteredAndSortedToDoListItems([...toDoListItems])
                break
        }

    }, [toDoListItems, filter])

    useEffect(() => {
        setPaginate(state => ({...state, page: 1}))
    }, [filter])

    const showToDoListItems = useMemo(() => {
        return filteredAndSortedToDoListItems.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)
    }, [filteredAndSortedToDoListItems, paginate.page])


    return (
        <div className="App">
            <Grid container alignItems="center" justifyContent="center" className='gridContainer'>
                <Container maxWidth="sm">
                    <Grid container direction="column">

                        {error &&
                            <Error setError={setError} time={2000}>{error}</Error>
                        }
                        <Typography variant="h4" component="h1" align="center">ToDo</Typography>
                        <InputForm addItem={setToDoListItems} setError={setError}/>

                        <Filter setFilter={setFilter}/>
                        <ToDoList showToDoListItems={showToDoListItems} setToDoListItems={setToDoListItems}/>
                        <Pagination
                            count={Math.ceil(filteredAndSortedToDoListItems.length / paginate.limit)}
                            onChange={(e, page) => setPaginate(state => ({...state, page}))}
                            page={paginate.page}
                            className='todo-pagination'
                        />
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
}

export default App;
