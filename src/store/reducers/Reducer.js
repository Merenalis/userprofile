import {SET_RESULT} from '../actionTypes';

const initialState = {
    info: [],
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                info: action.info.results[0]
            }
        default:
            return state;
    }
}