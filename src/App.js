import './App.css';
import Filter, {ALL} from "./components/Filter";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useMemo, useState} from "react";
import {Container, Grid, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Task from "./services/task";
import Error from "./components/Error";
import {useSortAndFilteredTasks} from "./hooks/useSortAndFilteredTasks";
import {useFetch} from "./hooks/useFetch";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_ADDRESS;

function App() {


    const [error, setError] = useState('')

    const [tasks, setTasks] = useState([])

    const [filter, setFilter] = useState({
        sortDirection: true,
        filterType: ALL,
    })

    console.log(tasks)


    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })

    const fetchTasks = useFetch(async () => {
        const response = await Task.getAll()
        setTasks(response)
    }, setError)

    const createTaskFetch = useFetch(async (name) => {
        const newTask = await Task.creat(name)
        setTasks((tasksState) => [...tasksState, newTask])
    }, setError)

    const editTaskFetch = useFetch(async (id, editData) => {

        const editTask = await Task.edit(id, editData)

        setTasks(tasksState => {

            const newTaskState = tasksState.filter(task => task.uuid !== id)
            newTaskState.push(editTask)
            return newTaskState

        })


    }, setError)

    const deleteTaskFetch = useFetch(async (id) => {
        await Task.delete(id)
        setTasks(state => [...state].filter(item => item.uuid !== id))
    }, setError)


    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])


    const sortAndFilteredTasks = useSortAndFilteredTasks(tasks, filter)


    useEffect(() => {
        setPaginate(state => ({...state, page: 1}))
    }, [filter])

    const displayedTasks = useMemo(() => {
        return sortAndFilteredTasks.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)
    }, [sortAndFilteredTasks, paginate])


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
