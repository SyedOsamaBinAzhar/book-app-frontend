export const userAction = (user) => ({
    type : "GET_USER_DETAILS",
    payload : {
        user,
    }
});

// export const signoutAction = () => ({
//     type : "SIGN_OUT",
// })