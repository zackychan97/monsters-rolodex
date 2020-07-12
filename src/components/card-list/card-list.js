import React from "react";

//styling import
import "../card-list/card-list.styles.css";

export const CardList = (props) => {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
};
