export const userAction = (user) => ({
    type : "GET_USER_DETAILS",
    payload : {
        user,
    }
});

export const clearUserDetailsAction = () => ({
    type : "CLEAR_USER_DETAILS",
    payload : {
        user : null
    }
})