import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';

const Navbar = () => {
    const [ isMobile, setIsMobile ] = useState(false);
  return (
      <nav id="navbar">
          <h3 className="logo"></h3>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
           onClick={() => setIsMobile(false)}
           >
              <Link to="/" className="main">
                  <li>Главная</li>
              </Link>
              <Link to="attractions" className="attractions">
                  <li>Гид</li>
              </Link>
              <Link to="photo" className="photo">
                  <li> Фотографии </li>
              </Link>
              <Link to="history" className="history">
                  <li>История </li>
              </Link>
          </ul>
          <button className="mobile-menu-icon"
            onClick={() => setIsMobile (!isMobile)}
          >
              {isMobile ? (<FontAwesomeIcon icon= {faTimes} />) : (<FontAwesomeIcon icon= {faBars} />)}
          </button>
      </nav>
  );
}

export {Navbar};
