import React from "react";
import * as styles from "./Wip.module.css";

const Wip = () => {
  const { wip, wipIcon } = styles;
  return (
    <div className={wip}>
      <h1>Work in Progress</h1>
      <p>Sorry, this page is still under construction.</p>
      <div className={wipIcon}>&#x1F6A7;</div>
    </div>
  );
}

export default Wip;