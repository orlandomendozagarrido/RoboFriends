import React,{Component} from "react";
import CardList from "./CardList";
import {robots} from "./Robots";
import SearchBox from "./SearchBox";


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    // change empty string whatever is in searxhbox what they type
    this.setState({searchfield:event.target.value})


 }
  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return (
    <div className="tc">
  <h1>RoboDudes</h1>
    <SearchBox onSearchChange={this.onSearchChange}/>
    <CardList robots={filteredRobots} />
    </div>

  );
}
}
export default App;
