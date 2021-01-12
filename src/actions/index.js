import axios from 'axios';
import { FETCH_FOLDERS, FETCH_SETS, FETCH_VOCAB, FETCH_PARTS, CLEAR_FOLDERS, CLEAR_CARDS, CLEAR_SETS, FETCH_FOLDER_ID, CLEAR_FOLDER_ID} from './types'

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
    const response = axios.get(`http://localhost:3002/sets/${setId}`)
    return {
        type: FETCH_VOCAB,
        payload: response
    }
}

export function fetchParts() {
    const response = axios.get('http://localhost:3002/parts')
    return {
        type: FETCH_PARTS,
        payload: response
    }
}

export function fetchFolderId(id) {
    return {
        type: FETCH_FOLDER_ID,
        payload: id
    }
}


export function clearFolders() {
    return {
        type: CLEAR_FOLDERS
    }
}

export function clearSets() {
    return {
        type: CLEAR_SETS
    }
}

export function clearCards() {
    return {
        type: CLEAR_CARDS
    }
}




