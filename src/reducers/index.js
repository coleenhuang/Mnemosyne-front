import { combineReducers } from 'redux';
import cardsData from './cardsData'
import cardsList from './cardsList'
import cardIndex from './cardIndex'

export default combineReducers({
    cardsData: cardsData,
    cardsList: cardsList,
    cardIndex: cardIndex
})