import { CREATE_CARDS, FETCH_PARTS } from '../actions/types'

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_PARTS:
            return [...state, ...action.payload.data];
        case CREATE_CARDS:
            return []
        default:
            return state
    }
}