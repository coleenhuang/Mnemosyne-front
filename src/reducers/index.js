import { combineReducers } from 'redux';
import cardsData from './cardsData'
import cardsList from './cardsList'

export default combineReducers({
    cardsData: cardsData,
    cardsList: cardsList
})