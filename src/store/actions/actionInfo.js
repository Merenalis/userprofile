import {SET_RESULT} from '../actionTypes';

export function actionInfo(info) {
    return {
        type: SET_RESULT,
        info: info,
    }
}


