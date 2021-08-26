import axios from 'axios'

export default class Tasks {

    static getAll = async () => {
        const res = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/4')
        return res.data
    }

}