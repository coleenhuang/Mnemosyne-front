import React from 'react';
import './App.css';
import Card from './Card';
import { connect } from 'react-redux';
import * as actions from '../actions'

class App extends React.Component {
  
  render () {
    console.log(this.props.cardsList)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ancient Greek Flashcard App</h1>
        </header>
        <Card />
        <button onClick={this.props.fetchCards}>Get Cards</button>
      </div>
    );}
}
 function mapStateToProps(state) {
  return {cardsList: state.cardsList}
 }


export default connect(mapStateToProps, actions)(App);
