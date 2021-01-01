import { FETCH_VOCAB } from '../actions/types';

export default function vocabReducer(state=[], action) {
    switch(action.type) {
        case FETCH_VOCAB:
                return [...state, ...action.payload.data]
        default:
            return state
    }
}