import axios from 'axios';
import { FETCH_FOLDERS, FETCH_SETS, FETCH_VOCAB, FETCH_CARDS, CREATE_CARDS, NEXT_CARD, PREV_CARD} from './types'

export function fetchFolders() {
    const response = axios.get('http://localhost:3002/folders')
    return {
        type: FETCH_FOLDERS,
        payload: response
    }
}

export function fetchSets(folderId) {
    const response = axios.get(`http://localhost:3002/folders/${folderId}`)
    return {
        type: FETCH_SETS,
        payload: response
    }
}

export function fetchVocab(setId) {
    const response = axios.get(`http://localhost:3002/folders/${setId}`)
    return {
        type: FETCH_VOCAB,
        payload: response
    }
}

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

export function nextCard() {
    return {
        type: NEXT_CARD
    }
}

export function prevCard() {
    return {
        type: PREV_CARD
    }
}


