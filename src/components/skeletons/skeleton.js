import React from "react";
import "./shimmer.css";

function Skeleton({ type }) {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
}

export default Skeleton;
