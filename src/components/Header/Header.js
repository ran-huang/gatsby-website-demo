import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';
import headerItem from '../../data/headerData';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const hamburgerClickHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const {
    home,
    navBarWrapper,
    navBar,
    navUl,
    active,
    navItem,
    hamburger,
    showMenu,
  } = styles;

  // const headerItem = { globalData }

  return (
    <nav className={navBar}>
      <div className={navBarWrapper}>
        <div>
          <Link
            to="/"
            activeClassName={active}
            className={`${home} ${navItem}`}
          >
            后|浪|法|评
          </Link>
        </div>
        <div className={hamburger} onClick={hamburgerClickHandler}>
          ☰
        </div>
        <div className={navbarOpen ? `${navUl} ${showMenu}` : `${navUl}`}>
          {headerItem?.map((item, index) => {
            return (
              <Link
                to={item.path}
                activeClassName={active}
                className={navItem}
                key={index}
                partiallyActive={true}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
