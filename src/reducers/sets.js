import { FETCH_SETS } from '../actions/types';

export default function setsReducer(state=[], action) {
    switch(action.type) {
        case FETCH_SETS:
            return [...state, ...action.payload.data];
        default:
            return state
    }
}