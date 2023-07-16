import React from "react";
import { Link } from "gatsby";
import { home, navUl, navBarWrapper, navBar, active, navItem } from "./Header.module.css";

const Header = () => {
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
        <div className={navUl}>
          <Link to="/professionals" activeClassName={active} className={navItem}>
            律师团队
          </Link>

          <Link to="/practices" activeClassName={active} className={navItem}>
            业务领域
          </Link>

          <Link to="/cases" activeClassName={active} className={navItem} partiallyActive="true">
            成功案例
          </Link>

          <Link to="/publications" activeClassName={active} className={navItem} partiallyActive="true">
            专业视点
          </Link>

          <Link to="/contact" activeClassName={active} className={navItem}>
            联系我们
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
