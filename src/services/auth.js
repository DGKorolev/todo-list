import axios from '../http/axios'

export default class Auth {

    static async registration(registrationFormData) {

        const res = await axios.post('/registration', registrationFormData)

        if (res.status !== 200) throw Error('Failed to get the task list')

        return res.data

    }

    static async login(loginFormData) {

        const res = await axios.post('/login', loginFormData)

        if (res.status !== 200) throw Error('Failed to get the task list')

        return res.data

    }

}