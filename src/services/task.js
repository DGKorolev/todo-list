import axios from 'axios'
import {getApiAddress} from "../library/library";

export default class Task {

    static async getAll() {
        const res = await axios.get(getApiAddress('/tasks/2'))
        return res.data
    }

    static async creat(taskName) {

        try {
            const res = await axios.post(getApiAddress('/tsk/2'), {
                name: taskName,
                done: false
            })

            return res.data

        } catch (error) {
            return error.message
        }
    }

}