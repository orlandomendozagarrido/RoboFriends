import React from "react";

import Card from "./Card.js";
const CardList = ({robots})=>{
  const cardComponent = robots.map((users, i )=>{
  return  <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
})
return (
  <div>
  {cardComponent}
</div>
)

}
export default CardList;
