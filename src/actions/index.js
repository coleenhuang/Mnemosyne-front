import axios from 'axios';
import { FETCH_CARDS, SHOW_ANSWER } from './types'

export function fetchCards() {
    const response = axios.get('http://localhost:3002/parts')
    return {
        type: FETCH_CARDS,
        payload: response
    }
}

export function showAnswer() {
    return {
        type: SHOW_ANSWER
    }
}