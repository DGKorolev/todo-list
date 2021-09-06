import axios from '../http/axios'
import {ASC} from "../components/Filter";

export default class Task {

    static async getAll(filterBy = '', order = ASC) {

        const params = {
            order,
        }

        if (filterBy) params.filterBy = filterBy

        const res = await axios.get('/tasks', {params})

        if (res.status !== 200) throw Error('Failed to get the task list')

        return res.data

    }

    static async create(taskName) {

        const res = await axios.post('/task', {
            name: taskName,
            done: false
        })

        if (res.status !== 200) throw Error('Task not created')

        return res.data
    }

    static async edit(taskId, editData) {

        const res = await axios.patch(`/task/${taskId}`, editData)

        if (res.status !== 200) throw Error('Data change error')

        return res.data
    }

    static async delete(taskId) {

        const res = await axios.delete(`/task/${taskId}`)

        if (res.status !== 204) throw Error('Data deletion error')

        return res.data

    }

}