import React, {useEffect, useMemo, useState} from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import Error from "../components/Error";
import InputForm from "../components/InputForm";
import Filter, {DESC} from "../components/Filter";
import ToDoList from "../components/ToDoList";
import Pagination from "@material-ui/lab/Pagination";
import {createFetch} from "../hooks/createFetch";
import Task from "../services/task";

const Tasks = () => {

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
        }, setError)
    }, [filter])


    const createTaskFetch = createFetch(async (name) => {
        await Task.create(name)
        setPaginate(paginateState => ({...paginateState, page: 1}))

        setFilter({
            sortDirection: DESC,
            filterType: ''
        })

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
        <Grid container alignItems="center" justifyContent="center" className='gridContainer' style={{height: '100vh'}}>
            <Container maxWidth="sm">
                <Grid container direction="column">

                    {error &&
                    <Error time={2000} setError={setError}>{error}</Error>
                    }
                    <Typography variant="h4" component="h1" align="center">ToDo</Typography>
                    <InputForm setTasks={setTasks} createTaskFetch={createTaskFetch}/>
                    <Filter setFilter={setFilter}/>
                    <ToDoList
                        displayedTasks={displayedTasks}
                        deleteTaskFetch={deleteTaskFetch}
                        editTaskFetch={editTaskFetch}
                        tasks={tasks}
                        filter={filter}
                    />
                    <Pagination
                        count={Math.ceil(tasks.length / paginate.limit)}
                        onChange={(e, page) => setPaginate(state => ({...state, page}))}
                        page={paginate.page}
                        className='todo-pagination'
                    />
                </Grid>
            </Container>
        </Grid>
    );
};

export default Tasks;