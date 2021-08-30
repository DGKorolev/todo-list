export const createFetch = (callback, setError) => {

    return async (...ars) => {

        try {

            return await callback(...ars)

        }catch (e){
            setError(e.message)
        }

    }

}