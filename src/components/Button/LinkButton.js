import React from "react";
import { Link } from "gatsby";
import { btn, btnLight, btnDark } from "./LinkButton.module.css";

const LinkButton = ({ to, children, type }) => {
  // type: [light, dark]
  return (
    <Link
      to={to}
      className={`${btn} ${type === "light" ? btnLight : btnDark}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
