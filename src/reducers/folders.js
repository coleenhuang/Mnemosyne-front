import { FETCH_FOLDERS, CLEAR_FOLDERS } from '../actions/types';

export default function foldersReducer(state=[], action) {
    switch(action.type) {
        case FETCH_FOLDERS:
            return [...state, ...action.payload.data];
        case CLEAR_FOLDERS:
            return undefined
        default:
            return [...state]
    }
}