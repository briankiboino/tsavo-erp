/* eslint-disable */
import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { values } from "./model";
import { Loader } from "../../components";

const ForgotPasswordView = ({ handleSubmit, response, loading }) => {
  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-2 fs-4">
                      Recover Your Account
                    </h5>
                  </div>
                  <Formik
                    initialValues={values}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .email("Enter valid email!")
                        .required("Required!"),
                    })}
                    onSubmit={(values) => {
                      handleSubmit(values)
                    }}
                  >
                    {(formik) => (
                      <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-12">
                          <div className="input-group has-validation">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                              {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <div className="validation-error">
                                {formik.errors.email}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn form_btn w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? <Loader /> : "Send Reset Link"}
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Sign in instead? <Link to="/">Sign in</Link>
                          </p>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPasswordView;
