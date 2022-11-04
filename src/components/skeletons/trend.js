import React from "react";
import Shimmer from "./shimmer";
import SkeletonElement from "./skeleton";

const SkeletonTrend = ({ theme, rows, columns }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      {[...Array(5)].map((row, index) => (
        <div className="single_trend" key={index}>
          <span className="single_trend_header">
            <SkeletonElement type="title" />
          </span>
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      ))}
      <Shimmer />
    </div>
  );
};

export default SkeletonTrend;
