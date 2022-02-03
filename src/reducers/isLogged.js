const loggedReducer = (state = false, action) => {
    console.log(state,action);
    switch (action.type) {
        case "SIGN_IN":
            return state = true;
        case "SIGN_OUT":
            return state = false;
        default:
            return state;
    }
}

export default loggedReducer;