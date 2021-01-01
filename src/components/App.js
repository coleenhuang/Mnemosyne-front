import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import CardContainer from './CardContainer';
import FolderContainer from './FolderContainer';
import SetContainer from './SetContainer';


class App extends React.Component {
  
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
          <Route path="/folder/:name">
            <SetContainer />
          </Route>
          <Route path="/set/:name">
            <CardContainer />
          </Route>
        </Switch>
      </div>
    );}
}
 


export default App;
