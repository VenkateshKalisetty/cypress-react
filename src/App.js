import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CounterComponent from './Components/Counter';
import HeaderComponent from './Components/Header';
import HomeComponent from './Components/Home';
import UsersComponent from './Components/Users';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/counter' component={CounterComponent}></Route>
          <Route exact path='/users' component={UsersComponent}></Route>
          <Route component={HomeComponent}></Route>
        </Switch>
      </Router>
    )
  }
}