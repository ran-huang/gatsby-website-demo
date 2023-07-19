import React from "react";
import { mainWrapper } from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <div className={mainWrapper}>
        {children}
    </div>
  );
};

export default Main;