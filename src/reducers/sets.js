import { FETCH_SETS, CLEAR_SETS } from '../actions/types';

const initialState = [];

export default function setsReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_SETS:
            return [...state, ...action.payload.data];
        case CLEAR_SETS:
            return initialState
        default:
            return state
    }
}