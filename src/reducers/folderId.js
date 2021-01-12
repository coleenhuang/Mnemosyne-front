import {FETCH_FOLDER_ID, CLEAR_FOLDER_ID} from '../actions';

const initialState = 0;

export default folderIdReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_FOLDER_ID:
            return payload
        case CLEAR_FOLDER_ID:
            return initialState
        default:
            return state
    }
}