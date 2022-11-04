/* eslint-disable */
import { PaginatedData } from "@models/index";
import React from "react";

const Pagination = ({
  data,
  setFilters,
}: {
  data: PaginatedData;
  setFilters: any;
}) => {
  var startItem = (data?.currentPage - 1) * data?.perPage + 1;
  var endItem = startItem + data?.perPage;

  if (endItem > data?.totalRecords) {
    endItem = data?.totalRecords;
  }

  let renderPageNumbers;
  const pageNumbers = [];
  if (
    data &&
    data.data !== undefined &&
    data.data != null &&
    data.totalRecords !== null
  ) {
    for (let i = 1; i <= Math.ceil(data?.totalRecords / data?.perPage); i++) {
      pageNumbers.push(i);
    }

    renderPageNumbers = pageNumbers.map((number) => {
      let classes = data?.currentPage === number ? "active" : "";

      if (
        number === 1 ||
        number === data?.totalRecords ||
        (number >= data?.currentPage - 5 && number <= data?.currentPage + 5)
      ) {
        return (
          <li
            key={number}
            className={`${classes} page-item`}
            onClick={() =>
              setFilters((prevState: any) => ({
                ...prevState,
                page: number,
              }))
            }
          >
            <span className="page-link">{number}</span>
          </li>
        );
      }
    });
  }

  return (
    <div className="paginate">
      <div className="total_rows">
        Showing {startItem} to {endItem} of {data?.totalRecords} records
      </div>
      <ul className="pagination pagination-rounded mt-1">
        <li className="page-item disabled">
          <span
            className="page-link"
            aria-label="Previous"
            onClick={() =>
              setFilters((prevState: any) =>
                ({
                  ...prevState,
                  page: data?.currentPage - 1,
                }.toString())
              )
            }
          >
            <i className="mdi mdi-chevron-left"></i>
          </span>
        </li>
        {renderPageNumbers}
        <li className="page-item">
          <span
            className="page-link"
            aria-label="Next"
            onClick={() =>
              setFilters((prevState: any) =>
                ({
                  ...prevState,
                  page: data?.currentPage + 1,
                }.toString())
              )
            }
          >
            <i className="mdi mdi-chevron-right"></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
