import './App.css';
import Filter, {DESC} from "./components/Filter";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useMemo, useState} from "react";
import {Container, Grid, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Task from "./services/task";
import Error from "./components/Error";
import {createFetch} from "./hooks/createFetch";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_ADDRESS;

function App() {


    const [error, setError] = useState('')

    const [tasks, setTasks] = useState([])

    const [filter, setFilter] = useState({
        sortDirection: DESC,
        filterType: '',
    })

    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })


    const fetchTasks = useMemo(() => {
        return createFetch(async () => {
            const response = await Task.getAll(filter.filterType, filter.sortDirection)
            setTasks(response)
        })
    }, [filter])


    const createTaskFetch = createFetch(async (name) => {
        await Task.create(name)
        setPaginate(paginateState => ({...paginateState, page: 1}))

        setFilter({
            sortDirection: DESC,
            filterType: ''
        })

        fetchTasks()

    }, setError)

    const editTaskFetch = createFetch(async (id, editData) => {
        await Task.edit(id, editData)
        fetchTasks()
    }, setError)

    const deleteTaskFetch = createFetch(async (id) => {
        await Task.delete(id)
        fetchTasks()
    }, setError)


    useEffect(() => {
        fetchTasks()
    }, [fetchTasks]);


    useEffect(() => {
        setPaginate(state => ({...state, page: 1}))
    }, [filter])

    const displayedTasks = useMemo(() => {
        return tasks.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)
    }, [tasks, paginate])


    return (
        <div className="App">
            <Grid container alignItems="center" justifyContent="center" className='gridContainer'>
                <Container maxWidth="sm">
                    <Grid container direction="column">

                        {error &&
                            <Error time={2000} setError={setError}>{error}</Error>
                        }
                        <Typography variant="h4" component="h1" align="center">ToDo</Typography>
                        <InputForm setTasks={setTasks} createTaskFetch={createTaskFetch}/>
                        <Filter setFilter={setFilter}/>
                        <ToDoList displayedTasks={displayedTasks} deleteTaskFetch={deleteTaskFetch} editTaskFetch={editTaskFetch}/>
                        <Pagination
                            count={Math.ceil(tasks.length / paginate.limit)}
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
