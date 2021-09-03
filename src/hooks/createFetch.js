export const createFetch = (callback, setError) => {

    return async (...ars) => {

        console.log(callback)

        try {

            return await callback(...ars)

        }catch (e){

            setError(e.message)
        }

    }

}