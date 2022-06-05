import axios from 'axios';
import { REGISTER_USER } from 'redux/constants/authConstant';


export const registerAction = (data) => {
    return (dispatch, getState) => {
        try {
            dispatch({type: REGISTER_USER.pending});
            const config = {
                headers:{
                    'Content-Type':'application/json',
                }
            }
            const response = await axios.post('/api/auth/register',data, config);
            dispatch({type: REGISTER_USER.success, payload: response.data})
            return response.data
        } catch (error) {
            dispatch({type: REGISTER_USER.failed, payload: error.response.data.message})
        }
    }
}