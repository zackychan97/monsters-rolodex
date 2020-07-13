import React from "react";
import { Card } from '../card/card.js'

//styling import
import "../card-list/card-list.styles.css";

// CardList console logs its props, and will return a div that maps over
// the monsters array 
export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};
