const userReducer = (state = null, action) => {
    // console.log(state,action);
    switch (action.type) {
        case "GET_USER_DETAILS":
            return state = action.payload;
        // case "SIGN_OUT":
        //     return state = null;
        default:
            return state;
    }
}

export default userReducer;