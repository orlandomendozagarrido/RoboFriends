import React from "react";


const SearchBox = ({searchfield, onSearchChange})=> {
return(
  <div className ="pa2">
  < input
  className="pa3 ba b-- green bg-lightest-blue"
   type="search"
   placeholder="Look up"
   //passing through a parameter 
   onChange={onSearchChange}
  />
  </div>
);


}
export default SearchBox;
