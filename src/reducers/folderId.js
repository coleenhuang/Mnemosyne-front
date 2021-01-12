import {FETCH_FOLDER_ID} from '../actions/types';


export default function folderIdReducer(state=0, action) {
    switch(action.type) {
        case FETCH_FOLDER_ID:
            return action.payload
        default:
            return state
    }
}