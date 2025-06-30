import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="menu-card-container">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div className="menu-card-wrapper" key={id}>
              <div className="menu-card">
                <div className="menu-card-body">
                  <span className="menu-card-author">#{category}</span>
                  <h2 className="menu-card-title">{name}</h2>
                  <span className="menu-card-description">{description}</span>
                  <div className="menu-card-read">Read</div>
                </div>
                <img src={image} alt={name} />
                <span className="menu-card-tag">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
