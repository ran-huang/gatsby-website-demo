import React from "react";
import * as styles from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.mainWrapper}>
        {children}
    </div>
  );
};

export default Main;