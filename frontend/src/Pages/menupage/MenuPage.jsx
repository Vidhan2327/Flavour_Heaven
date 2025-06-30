import React, { useState } from "react";
import "./menuStyles.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import MenuNavbar from "./MenuNavbar"; 
const uniqueList = [
  ...new Set(Menu.map((curElem) => curElem.category)),
  "All",
];

const MenuPage = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList); 

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
    } else {
      const updatedList = Menu.filter(
        (curElem) => curElem.category === category
      );
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <MenuNavbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default MenuPage;
