import { combineReducers } from 'redux';
import parts from './parts'
import folders from './folders'
import sets from './sets'
import vocab from './vocab'
import folderId from './folderId'

export default combineReducers({
    folders: folders,
    folderId: folderId,
    sets: sets,
    parts: parts,
    vocab: vocab
})