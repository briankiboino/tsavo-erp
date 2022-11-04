import React from "react";
import Shimmer from "./shimmer";
import SkeletonElement from "./skeleton";

const SkeletonTable = ({ theme, rows, columns }) => {
  const themeClass = theme || "light";

  return (
    <tbody className={`skeleton-wrapper ${themeClass}`}>
      {[...Array(rows)].map((row, index) => (
        <tr className="skeleton-article" key={index}>
          {[...Array(columns)].map((column, index) => (
            <td className="align-middle" key={index}>
              <SkeletonElement type="text" />
            </td>
          ))}
        </tr>
      ))}
      <Shimmer />
    </tbody>
  );
};

export default SkeletonTable;
