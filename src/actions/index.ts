export const getRatesAction = (size:string, type:string) => {
    const payload = {
        size,
        type
    }
    return {
        type: "GET_RATE_REQUESTED",
        payload
    }
}