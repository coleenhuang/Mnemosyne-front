import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardContainer from './CardContainer';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchCards()
  }

  componentDidUpdate(){
    if (this.props.cardsData.length > 0 && this.props.cardsList.length === 0) {
      this.props.createCards(this.props.cardsData);
    }
  }
  
  render () {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Μνημοσύνη</h1>
        </header>
          {this.props.cardsList.length > 0?<CardContainer /> : null}
      </div>
    );}
}

function mapStateToProps(state) {
  return {
    cardsData: state.cardsData,
    cardsList: state.cardsList
  }
}
 


export default connect(mapStateToProps, actions)(App);
