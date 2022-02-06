export const authAction = () => ({
    type : "SIGN_IN",
    payload : {
        authState : true,
    }
});

export const signoutAction = () => ({
    type : "SIGN_OUT",
    payload : {
        authState : false,
    }
})