import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import CustomTable from "../../../components/table";
import { PaginatedData } from "@models/index";
import BreadCrumb from "../../../components/bread-crumb";
import Pagination from "../../../components/pagination";
import OffCanvas from "../../../components/offcanvas";
import MyCasesFilters from "./filters";
import { caseAttributes } from "../../../utilities/row_attributes";

const MyCasesView = ({
  loading,
  data,
  filters,
  setFilters,
  action,
  setOffCanvasVisibility,
}: {
  loading: boolean;
  data: PaginatedData;
  filters: any;
  setFilters: any;
  action: any;
  setOffCanvasVisibility: any;
}) => {
  return (
    <React.Fragment>
      <BreadCrumb title="My Cases" />
      {/* Filters */}
      <div className="card">
        <div className="card-body">
          <Formik
            initialValues={filters}
            validationSchema={Yup.object({
              phone: Yup.string()
                .email("Enter valid email!")
                .required("Required!"),
              name: Yup.string()
                .min(5, "Must be a minimum of 5 characters")
                .required("Required"),
            })}
            onSubmit={(values) => {
              action(filters);
            }}
          >
            {(formik) => (
              <form className="" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label htmlFor="progresspill-first_name-input">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...formik.getFieldProps("name")}
                      />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <div className="validation-error"></div>
                    ) : null}
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label htmlFor="progresspill-first_name-input">
                        Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        {...formik.getFieldProps("phone")}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="validation-error"></div>
                    ) : null}
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label htmlFor="progresspill-first_name-input">
                        ID Card
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        {...formik.getFieldProps("phone")}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="validation-error"></div>
                    ) : null}
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label htmlFor="progresspill-first_name-input">
                        Case Status
                      </label>

                      <select
                        className="form-select"
                        id="case-status"
                        {...formik.getFieldProps("phone")}
                      >
                        <option value="">Please Select</option>
                        <option value="Allocated">Allocated</option>
                        <option value="NotAllocated">Not Allocated</option>
                      </select>
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="validation-error"></div>
                    ) : null}
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <button
                        className="btn btn-primary w-100 waves-effect waves-light mt-4"
                        type="submit"
                      >
                        {loading ? (
                          <i className="bx bx-loader loading"></i>
                        ) : (
                          "Search"
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <button
                        className="btn btn-primary w-100 waves-effect waves-light mt-4"
                        onClick={() => setOffCanvasVisibility(true)}
                      >
                        Add Filters
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      {/* Customers */}
      <div className="card">
        <div className="card-body">
          <CustomTable
            columns={[
              "Phone Number",
              "ID Card Name",
              "Applied Loan",
              "Loan Limit",
              "Audited",
              "Date Created",
              "Last Login",
              "Disburse",
              "Account",
              "Actions",
            ]}
            attributes={caseAttributes}
            data={data?.data}
            loading={loading}
          />
          <Pagination data={data} setFilters={setFilters} />
        </div>
      </div>
      <OffCanvas
        placement="end"
        title="Cases Filters"
        content={<MyCasesFilters filters={filters} setFilters={setFilters} />}
      />
    </React.Fragment>
  );
};

export default MyCasesView;
