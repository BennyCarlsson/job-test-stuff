import React, { Component } from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
          <header className="App-header">
          <NavLink to="/">Counter</NavLink>
            <NavLink to="/page2">Increment</NavLink>
            <NavLink to="/page3">Decrement</NavLink>
            </header>
            <Route exact path="/" component={PageOne}/>
            <Route path="/page2" component={PageTwo}/>
            <Route path="/page3" component={PageThree}/>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
