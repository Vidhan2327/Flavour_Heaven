import React from "react";
import "./menuStyles.css";

const MenuNavbar = ({ filterItem, menuList }) => {
  return (
    <nav className="menu-navbar" aria-label="Menu category navigation">
      <div className="menu-btn-group">
        {menuList.map((curElem, index) => (
          <button
            key={index}
            className="menu-btn-group__item"
            onClick={() => filterItem(curElem)}
          >
            {curElem}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MenuNavbar;
