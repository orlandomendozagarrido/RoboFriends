
//destructoring wthe react and we are importing the component
import React, { Component } from 'react';//destrcutering getting component
//import the logo
import logo from './logo.svg';
//import the css
import './App.css';
//extends comṕonent that comes with react
//child of component because it extends from component . component is in react
//react is an object that holds alot of info thats why we use descrutering
class App extends Component {//standard syntax renders
 //renders something
  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
