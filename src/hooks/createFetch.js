export const createFetch = (callback, setError = null) => {

    return async (...ars) => {

        try {

            return await callback(...ars)

        }catch (e){
            if (setError) setError(e.message)
            console.log(e.message)
        }

    }

}