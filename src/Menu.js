import React from "react";
import { MenuList } from "./MenuList";
import MenuContents from "./MenuContents";
import "./Menu.css"

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuContents
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Menu;