import './App.css';
import Filter from "./components/Filter";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useMemo, useState} from "react";
import {Container, Grid, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Task from "./services/task";
import Error from "./components/Error";
import {useSortAndFilteredTasks} from "./hooks/useSortAndFilteredTasks";
import {useFetch} from "./hooks/useFetch";


export const ALL = 'all'
export const DONE = 'done'
export const UNDONE = 'undone'


function App() {

    // const [error, setError] = useState('')

    const [tasks, setTasks] = useState([])

    const [filter, setFilter] = useState({
        sortDirection: true,
        filterType: ALL,
    })

    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })

    const [fetchFunction, error] = useFetch(async () => {
        const response = await Task.getAll()
        setTasks(response)
    })

    useEffect(() => {
        fetchFunction()
    })

    // useEffect(() => {
    //
    //     const fetchData = async () => {
    //         const response = await Task.getAll()
    //         setTasks(response)
    //     }
    //
    //     fetchData()
    //
    // }, [])

    const sortAndFilteredTasks = useSortAndFilteredTasks(tasks, filter)


    useEffect(() => {
        setPaginate(state => ({...state, page: 1}))
    }, [filter])

    const displayedTasks = useMemo(() => {
        return sortAndFilteredTasks.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)
    }, [sortAndFilteredTasks, paginate.page])


    return (
        <div className="App">
            <Grid container alignItems="center" justifyContent="center" className='gridContainer'>
                <Container maxWidth="sm">
                    <Grid container direction="column">

                        {error &&
                        <Error time={2000}>{error}</Error>
                        }
                        <Typography variant="h4" component="h1" align="center">ToDo</Typography>
                        <InputForm setTasks={setTasks}/>
                        <Filter setFilter={setFilter}/>
                        <ToDoList showToDoListItems={displayedTasks} setToDoListItems={setTasks}/>
                        <Pagination
                            count={Math.ceil(sortAndFilteredTasks.length / paginate.limit)}
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
