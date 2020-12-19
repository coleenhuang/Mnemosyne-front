import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import * as actions from '../actions';
import CardContainer from './CardContainer';
import FolderContainer from './FolderContainer';
import SetContainer from './SetContainer';


class App extends React.Component {
  /*componentDidMount(){
    this.props.fetchCards()
  }

  componentDidUpdate(){
    if (this.props.cardsData.length > 0 && this.props.cardsList.length === 0) {
      this.props.createCards(this.props.cardsData);
    }
  }*/
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <h1>Μνημοσύνη</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={FolderContainer} />
          <Route path="/sets" component={SetContainer} />
        </Switch>
          {/*this.props.cardsList.length > 0?<CardContainer /> : null*/}
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
