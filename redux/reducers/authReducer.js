import { REGISTER_USER } from 'redux/constants/authConstant';

const intialState = {
    user: {},
    loader: [],
    error: '',
};

const authReducer = (state = intialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case REGISTER_USER.pending:
            newState.loader = [...newState.loader, REGISTER_USER.pending];
            newState.error = '';
            return;

        case REGISTER_USER.success:
            newState.loader = newState.loader.filter((el) => el !== REGISTER_USER.pending);
            newState.user = action.payload;
            return newState;

        case REGISTER_USER.failed:
            newState.loader = newState.loader.filter((el) => el !== REGISTER_USER.pending);
            newState.error = action.payload;
            return newState;
    }
    return newState;
};


export default authReducer;