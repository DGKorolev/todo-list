export const createFetch = (callback, setError = null) => {

    return async (...ars) => {

        try {

            return await callback(...ars)

        }catch (e){
            const responseMessage = e.response.data.message
            if (setError) setError(responseMessage ? responseMessage : e.message)
            console.log(e.message)
        }

    }

}