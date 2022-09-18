import React from "react";

function MenuContents( props ) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}> </div>
      <div className="flex-change">
        <h1> {props.name} </h1>
        <p> ${props.price} </p>
      </div>
    </div>
  )
}

export default MenuContents