const initialState = {
    users: [],
    inProgress: true
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUESTED": {
            const { inProgress } = action;
            return {
                ...state,
                inProgress
            }
        }
        case "GET_USERS_SUCCESS": {
            const { inProgress, data, error } = action;
            return {
                ...state,
                users: data,
                inProgress,
                error
            }
        }
        case "GET_USERS_FAILED": {
            const { inProgress, error } = action;
            return {
                ...state,
                inProgress,
                error
            }
        }
        default:
            return state;
    }
}

export default userReducer;