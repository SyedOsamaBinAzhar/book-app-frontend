const userReducer = (state = null, action) => {

    switch (action.type) {
        case "GET_USER_DETAILS":
            return state = action.payload;
        case "CLEAR_USER_DETAILS":
            return state = action.payload
        default:
            return state;
    }
}

export default userReducer;