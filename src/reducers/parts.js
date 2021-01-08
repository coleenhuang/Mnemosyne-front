import { FETCH_PARTS, CLEAR_CARDS } from '../actions/types'

const initialState = [];

export default function partsReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_PARTS:
            return [...state, ...action.payload.data];
        case CLEAR_CARDS:
            return initialState
        default:
            return state
    }
}