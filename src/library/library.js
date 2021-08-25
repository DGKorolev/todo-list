export const convertAndGetTime = (dateStr) => {
    return new Date(dateStr.split('/').reverse().join('-')).getTime()
}

export const getNumPages = (end, exception) => {
    const arr = []
    for (let i = 1; i <= end; i++){
        if (i === exception) continue
        arr.push(i)
    }
    return arr
}