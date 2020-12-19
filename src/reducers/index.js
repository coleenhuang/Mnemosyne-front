import { combineReducers } from 'redux';
import cardsData from './cardsData'
import cardsList from './cardsList'
import cardIndex from './cardIndex'
import folders from './folders'
import sets from './sets'

export default combineReducers({
    folders: folders,
    sets: sets,
    cardsData: cardsData,
    cardsList: cardsList,
    cardIndex: cardIndex
})