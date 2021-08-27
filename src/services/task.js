import axios from 'axios'
import {getApiAddress} from "../library/library";


export default class Task {

    static async getAll() {
        const res = await axios.get('/tasks/2')
        return res.data
    }

    static async creat(taskName) {

            const res = await axios.post('/task/2', {
                name: taskName,
                done: false
            })

            return res.data
    }

    static async edit(taskId, editData) {

        const res = await axios.patch(getApiAddress(`/task/2/${taskId}`), editData)

        return res.data
    }

    static async delete(taskId) {

        const res = await axios.delete(`/task/2/${taskId}`)
        return res.data
    }

}