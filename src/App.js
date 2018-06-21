import React, { Component } from 'react';
import './App.css';
import {HashRouter, Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
          <Link to="/">Page1</Link>
          <Link to="/page2">Page2</Link>
          <Link to="/page3">Page3</Link>
          </header>
          <Route exact path="/" component={PageOne}/>
          <Route path="/page2" component={PageTwo}/>
          <Route path="/page3" component={PageThree}/>
        </div>
      </HashRouter>
    );
  }
}

const PageOne = ()=>(
  <div><h1>Page1</h1></div>
)

const PageTwo = ()=>(
  <div><h1>Page2</h1></div>
)


const PageThree = ()=>(
  <div><h1>Page3</h1></div>
)
export default App;
