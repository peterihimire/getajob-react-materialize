import React from "react";
import './MyCard.css'

const MyCard = (props) => {
  return (
    <div className={`my-card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default MyCard;
