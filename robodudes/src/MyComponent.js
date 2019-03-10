
//import from react descructering from react with comma , component
import React, { Component } from 'react';
//imports css file i made for MyComponent
import "./MyComponent.css";
 // extends MyComponent from component
 //class is a reserved keyword
 //just a function
 //const MyComponent =() =>{} //same thing //function that takes parameters
 //syntax sugar but just a function
class MyComponent extends Component  {
//renders my new component
render(){

            //div wraps it into one item
            //because you can only return one item
  return  (
   // jsx styles per component
   //react allows you to write js syntax in html
   // each component is its separate universe
   // react using jsx to render there fake DOM
   // creates the react virtual DOM compares to actual browser DOM , and then updates actual DOM
   //creates objects and only changes what needs to be done in DOM
   //beacuase its js we have to use className
    <div className="f3 tc"><h1>OrlandoMg!</h1>
  <p> whats up dudes</p>
  <p>yeah man</p>

  <p>{this.props.greeting}</p>
  </div>
)
// wrap in curly braces so it knows its js ,
//this.props greeting so it binds it to greeting Prop
}


}
 //return the default set to MyComponent
export default MyComponent;
