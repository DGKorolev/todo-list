import {useState} from "react";

export const useFetch = (callback) => {

    const [error, setError] = useState('')

    const fetchFunction = async (...ars) => {

        try {

            return await callback(...ars)

        }catch (e){
            setError(e.message)
        }

    }

    return [fetchFunction, error]

}