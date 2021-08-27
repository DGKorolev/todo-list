import axios from 'axios'
import {getApiAddress} from "../library/library";

export default class Task {

    static async getAll() {
        const res = await axios.get(getApiAddress('/tasks/2'))
        return res.data
    }

    static async creat(taskName) {

            const res = await axios.post(getApiAddress('/task/2'), {
                name: taskName,
            })

            return res.data
    }

    static async edit(taskId, editProp) {

        const resource = `/task/2/${taskId}`

        const res = await axios.patch(getApiAddress(resource), editProp)

        return res.data
    }

    static async delete(taskId) {

        const resource = `/task/2/${taskId}`

        const res = await axios.delete(getApiAddress(resource))

        return res.data
    }

}