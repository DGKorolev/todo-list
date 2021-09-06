import axios from 'axios'
import {ASC} from "../components/Filter";

export default class Auth {

    static async registration(registrationFormData) {

        const res = await axios.post('/registration', registrationFormData)

        if (res.status !== 200) throw Error('Failed to get the task list')

        return res.data

    }

}