import { GET_USER, REGISTER_USER, UPDATE_USER } from 'redux/constants/authConstant';

const intialState = {
    success: {},
    loader: [],
    error: '',
    user: {},
    isAuthenticated: false,
    updateUser: false,
};

const authReducer = (state = intialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case REGISTER_USER.pending:
            newState.loader = [...newState.loader, REGISTER_USER.pending];
            newState.error = '';
            return newState;

        case REGISTER_USER.success:
            newState.loader = newState.loader.filter((el) => el !== REGISTER_USER.pending);
            newState.success = action.payload;
            return newState;

        case REGISTER_USER.failed:
            newState.loader = newState.loader.filter((el) => el !== REGISTER_USER.pending);
            newState.error = action.payload;
            return newState;

        case GET_USER.pending:
            newState.loader = [...newState.loader, GET_USER.pending];
            newState.error = '';
            return newState;

        case GET_USER.success:
            newState.loader = newState.loader.filter((el) => el !== GET_USER.pending);
            newState.user = action.payload;
            newState.isAuthenticated = true;
            return newState;

        case GET_USER.failed:
            newState.loader = newState.loader.filter((el) => el !== GET_USER.pending);
            newState.error = action.payload;
            return newState;

        case UPDATE_USER.pending:
            newState.loader = [...newState.loader, UPDATE_USER.pending];
            newState.error = '';
            return newState;

        case UPDATE_USER.success:
            newState.loader = newState.loader.filter((el) => el !== UPDATE_USER.pending);
            newState.updateUser = true;
            return newState;

        case UPDATE_USER.failed:
            newState.loader = newState.loader.filter((el) => el !== UPDATE_USER.pending);
            newState.error = action.payload;
            return newState;
    }
    return newState;
};

export default authReducer;
