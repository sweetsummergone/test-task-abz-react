const userReducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            state = action.users;
            return state;
        case "GET":
            state = action.users;
            return state;
        case "POST":
            state = action.users;
            return state;
        default:
            return state;
    }
};

export default userReducer;