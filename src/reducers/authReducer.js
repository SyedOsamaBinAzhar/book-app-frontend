const authReducer = (state = false, action) => {

    switch (action.type) {
        case "SIGN_IN":
            return state = action.payload;
        // case "SIGN_OUT":
        //     return state = null;
        default:
            return state;
    }
    
}

export default authReducer;