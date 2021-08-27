export const useFetch = (callback, setError) => {

    return async (...ars) => {

        try {

            return await callback(...ars)

        }catch (e){
            setError(e.message)
        }

    }

}