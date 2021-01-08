import { FETCH_VOCAB, CLEAR_CARDS } from '../actions/types';

const initialState = [];

export default function vocabReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_VOCAB:
                return [...state, ...action.payload.data]
        case CLEAR_CARDS:
            return initialState
        default:
            return state
    }
}