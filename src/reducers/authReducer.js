const authReducer = (state = false, action) => {

    switch (action.type) {
        case "SIGN_IN":
            return state = action.payload.authState;
        case "SIGN_OUT":
            return state = action.payload.authState
        default:
            return state;
    }
    
}

export default authReducer;