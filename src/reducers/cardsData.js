import { CREATE_CARDS, FETCH_CARDS } from '../actions/types'

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_CARDS:
            return [...state, ...action.payload.data];
        case CREATE_CARDS:
            return []
        default:
            return state
    }
}