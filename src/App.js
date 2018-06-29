import React, { Component } from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import {Menu} from "semantic-ui-react";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
          <header className="App-header">
            <Menu size='large' fluid widths={3}>
              <Menu.Item>
                <NavLink to="/">Counter</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/page2">Increment</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/page3">Decrement</NavLink>
              </Menu.Item>
            </Menu>
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
