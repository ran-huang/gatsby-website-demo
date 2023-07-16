import React from "react";
import { mainWrapper, heading } from "./Main.module.css";

const Main = ({ children, pageTitle }) => {
  return (
    <div className={mainWrapper}>
      <h1 className={heading}>{pageTitle}</h1>
        {children}
    </div>
  );
};

export default Main;