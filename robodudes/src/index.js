import React from 'react';//this is the painter that renders the components, imports files and pkgs from react,robot that does dom manipulation
import ReactDOM from 'react-dom';//dom website , onto canvas of website
import './index.css';//add css to each different componment to aplly to app.js component the ./ is in same folder
//import App from './App';//if no dot it assumes its javascript
//import MyComponent from "./MyComponent.js"
import * as serviceWorker from './serviceWorker';

import CardList from "./CardList";
//library for css dircetly applying to jsx , html
import "tachyons";
import {robots} from "./Robots";
ReactDOM.render(
<CardList robots={robots} />
, document.getElementById('root'));//what react does , use function render , want to render app to document (root)
// render funstion takes 2 arguments what you are rendering from to where you are rendering


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
