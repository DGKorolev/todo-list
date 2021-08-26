export const getTime = (dateStr) => {
    return new Date(dateStr).getTime()
}

export const getApiAddress = (resource) => {
    return [process.env.REACT_APP_API_ADDRESS, resource].join('')
}

// export const isString() =