import axios from 'axios';
import { FETCH_CARDS, CREATE_CARDS} from './types'

export function fetchCards() {
    const response = axios.get('http://localhost:3002/parts')
    return {
        type: FETCH_CARDS,
        payload: response
    }
}

export function createCards(info) {
    return {
        type: CREATE_CARDS,
        payload: info
    }
}

