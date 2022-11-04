import React, { useState } from "react";

const MyCasesFilters = ({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: any;
}) => {
  interface Filter {
    dataType: string;
    inputFiledType: string;
    label: string;
    key: string;
  }

  const [generalFilters, setGeneralFilters] = useState<Array<Filter>>([
    {
      dataType: "string",
      inputFiledType: "default",
      label: "Phone Number",
      key: "phone_number",
    },
    {
      dataType: "string",
      inputFiledType: "default",
      label: "ID Number",
      key: "id_number",
    },
    {
      dataType: "string",
      inputFiledType: "default",
      label: "Name",
      key: "id_card_name",
    },
  ]);

  const removeFilter = (filter: any) => {};

  const addFilter = (filter: any) => {};

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <label htmlFor="general-filters">Add Filters</label>
            <select
              name="filters"
              className="form-select"
              id="general-filters"
              onChange={(e) => addFilter(e.target.value)}
            >
              <option value="">Select Filter</option>
              {generalFilters.map((filter, index) => (
                <option key={index}>{filter.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <label htmlFor="selected-filters">Selected Filters</label>
          <div className="mb-3">
            <div className="selected-filters">
              {generalFilters.map((filter, index) => (
                  <span className="badge rounded-pill badge-soft-primary font-size-12">{filter.label}</span>
                // <span className="selected-filter-container">
                //   <span key={index} className="selected-filter">
                //     {filter.label}
                //   </span>
                //   <span
                //     className="remove-filter"
                //     onClick={() => removeFilter(filter)}
                //   >
                //     x
                //   </span>
                // </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyCasesFilters;
