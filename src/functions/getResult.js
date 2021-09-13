import axios from 'axios';
import {actionInfo} from '../store/actions/actionInfo';

export const getResult = () => {
    return async (dispatch) => {
        const result = await axios.get('https://randomuser.me/api/')

        dispatch(actionInfo(result.data))
    }
}