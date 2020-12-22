import { FETCH_SETS, CLEAR_SETS } from '../actions/types';

export default function setsReducer(state=[], action) {
    switch(action.type) {
        case FETCH_SETS:
            return [...state, ...action.payload.data];
        case CLEAR_SETS:
            return []
        default:
            return state
    }
}