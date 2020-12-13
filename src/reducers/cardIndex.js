import { NEXT_CARD, PREV_CARD } from '../actions/types'

export default function cardIndexReducer(state=0, action) {
    switch (action.type) {
        case NEXT_CARD:
            return state +1
        case PREV_CARD:
            return state -1
        default:
            return state
    }
}