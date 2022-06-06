import axios from 'axios';
import { REGISTER_USER } from 'redux/constants/authConstant';


export const registerAction = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: REGISTER_USER.pending});
            const config = {
                headers:{
                    'Content-Type':'application/json',
                }
            }
            console.log(data);
            const response = await axios.post('/api/auth/register',data, config);
            console.log(response)
            dispatch({type: REGISTER_USER.success, payload: response.data})
        } catch (error) {
            console.log(error)
            dispatch({type: REGISTER_USER.failed, payload: error.response.data.message})
        }
    }
}