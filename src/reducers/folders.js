import { FETCH_FOLDERS } from '../actions/types';

export default function foldersReducer(state=[], action) {
    switch(action.type) {
        case FETCH_FOLDERS:
            return [...state, ...action.payload.data];
        default:
            return state
    }
}