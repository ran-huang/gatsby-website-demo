import React from "react";

const DecorLine = ( { width }) => {

  const customWidth = width || "30%";

  const style = {
    display: "inline-block",
    width: customWidth,
    height: 0,
    marginBottom: "10px",
    borderBottom: "3px solid var(--primary-color)",
    borderRadius: "5px",
  };
  return <div style={style}></div>;
};

export default DecorLine;
