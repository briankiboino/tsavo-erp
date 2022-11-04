import React from "react";
import Shimmer from "./shimmer";
import SkeletonElement from "./skeleton";

const SkeletonTweet = ({ theme, rows, columns }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      {[...Array(11)].map((row, index) => (
        <div className="post" key={index
        }>
          <div className="post_avatar">
            <SkeletonElement type="avatar" />
          </div>
          <div className="post_body">
            <div className="post_header">
              <div className="post_header_text">
              <SkeletonElement type='text'/>
              </div>
              <div className="post_header_description">
              <SkeletonElement type='text'/>
              <SkeletonElement type='text'/>
              <SkeletonElement type='text'/>
              </div>
            </div>
            <SkeletonElement type="text" />
            <div className="post_footer">
            <SkeletonElement type="item" />
            <SkeletonElement type="item" />
            <SkeletonElement type="item" />
            <SkeletonElement type="item" />
            </div>
          </div>
        </div>
      ))}
      <Shimmer />
    </div>
  );
};

export default SkeletonTweet;
