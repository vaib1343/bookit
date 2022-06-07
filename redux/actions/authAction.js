import axios from 'axios';
import { GET_USER, REGISTER_USER, UPDATE_USER } from 'redux/constants/authConstant';

export const registerAction = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: REGISTER_USER.pending });
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            console.log(data);
            const response = await axios.post('/api/auth/register', data, config);
            dispatch({ type: REGISTER_USER.success, payload: response.data });
        } catch (error) {
            dispatch({ type: REGISTER_USER.failed, payload: error.response.data.message });
        }
    };
};

export const getUserDetails = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: GET_USER.pending });
            const response = await axios.get('/api/me');
            dispatch({ type: GET_USER.success, payload: response.data?.user });
        } catch (error) {
            dispatch({ type: GET_USER.failed, payload: error.response.data.message });
        }
    };
};

export const updateUserDetail = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: UPDATE_USER.pending });
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.put('/api/me/update', data, config);
            dispatch({ type: UPDATE_USER.success, payload: response.data?.success });
        } catch (error) {
            dispatch({ type: UPDATE_USER.pending, payload: error.response.data.message });
        }
    };
};
