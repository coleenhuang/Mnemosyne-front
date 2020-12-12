import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardContainer from './CardContainer';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchCards()
  }
  render () {
    console.log(this.props.cardsList)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Μνημοσύνη</h1>
        </header>
          <CardContainer />
      </div>
    );}
}
 function mapStateToProps(state) {
  return {cardsList: state.cardsList}
 }


export default connect(mapStateToProps, actions)(App);
