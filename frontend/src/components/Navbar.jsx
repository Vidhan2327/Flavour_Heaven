import React, { useState } from "react";
import restData from "../restApi.json";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">Flavor Heaven</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {restData.data[0].navbarLinks.map((element) => (
            <a
              key={element.id}
              href={`/#${element.link}`}
              className="nav-anchor"
            >
              {element.title}
            </a>
          ))}
        </div>

        <RouterLink to="/our-menu" className="menuBtn">
          OUR MENU
        </RouterLink>

        <RouterLink to="/my-reservations" className="menuBtn">
          MY RESERVATIONS
        </RouterLink>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
