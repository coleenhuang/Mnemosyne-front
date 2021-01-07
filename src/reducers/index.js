import { combineReducers } from 'redux';
import parts from './parts'
import cardIndex from './cardIndex'
import folders from './folders'
import sets from './sets'
import vocab from './vocab'

export default combineReducers({
    folders: folders,
    sets: sets,
    parts: parts,
    cardIndex: cardIndex,
    vocab: vocab
})