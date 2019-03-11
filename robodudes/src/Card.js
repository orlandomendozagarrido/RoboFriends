//import react so it can read jsx
import React from "react";

const Card =({ name, email, id }) => {

  return(

    <div className= "bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5 ">

  <img alt="robots" src={`https://robohash.org/${id}?200x200 `}/>
    <div>
    <h2>{name} </h2>
    <p>{email}</p>
    </div>
    </div>
  );
}
//<h1>RoboFriends</h1>

export default Card;
