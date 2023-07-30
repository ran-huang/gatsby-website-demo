import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  home,
  navBarWrapper,
  navBar,
  navUl,
  active,
  navItem,
  hamburger,
  showMenu,
} from './Header.module.css';
import { headerItem } from '../../data/global.json';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const hamburgerClickHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

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
              >
                {item.text}
              </Link>
            );
          })}
          {/*
          <Link
            to="/professionals"
            activeClassName={active}
            className={navItem}
          >
            律师团队
          </Link>
          <div className={split}></div>
          <Link to="/practices" activeClassName={active} className={navItem}>
            业务领域
          </Link>
          <div className={split}></div>
          <Link
            to="/cases"
            activeClassName={active}
            className={navItem}
            partiallyActive={true}
          >
            成功案例
          </Link>
          <div className={split}></div>
          <Link
            to="/publications"
            activeClassName={active}
            className={navItem}
            partiallyActive={true}
          >
            专业视点
          </Link>
          <div className={split}></div>

          <Link to="/contact" activeClassName={active} className={navItem}>
            联系我们
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
