import React from "react";
import { tableHelpers } from "src/helpers/table";

import { RowAttributeType } from "../../domain/enums";
import SkeletonTable from "../skeletons/skeleton.table";

const CustomTable = ({
  columns,
  attributes,
  data,
  loading,
}: {
  columns: Array<string>;
  attributes: Array<any>;
  data: Array<any>;
  loading: boolean;
}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          {columns.map((item, index) => (
            <th key={index} scope="col">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      {loading ? (
        <SkeletonTable theme={"light"} rows={5} columns={6} />
      ) : !loading && data && data.length === 0 ? (
        <tbody>
          <tr className="text-center">
            <td colSpan={12} className="py-3">
              <span className="no-records-to-display-message text-capitalize ">
                Oops! no records to display!
              </span>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {attributes.map((attribute, idx) => (
                  <React.Fragment>
                    {attribute?.rowAttributeType === RowAttributeType.default ?
                      <td key={index}>{item[attribute?.key]}</td>
                     : (
                      <td key={index}>
                        {tableHelpers.renderCustomTableData(
                          attribute,
                          item
                        )}
                      </td>
                    )}
                  </React.Fragment>
                ))}
              </tr>
            ))}
        </tbody>
      )}
    </table>
  );
};

export default CustomTable;
