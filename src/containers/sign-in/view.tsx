/* eslint-disable */
import React from "react";

import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { UserCredentials } from "./model";
// import logo from "../../assets/tsavo-erp-logo.jpeg";


const SignInView = ({
  loading,
  handleSignIn,
  credentials,
}: {
  loading: boolean;
  handleSignIn: any;
  credentials: UserCredentials;
}) => {
  let histroy = useHistory();
  return (
    <div className="container page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-12">
            {/* <img src={logo}/> */}
            <div className="auth-form-light text-left py-5 px-4">
              <div className="row">
                <div className="col-lg-6">
                  <iframe
                    width="500"
                    height="200"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                  <h2 className="mt-4">Product Tours</h2>
                  <p className="mb-4">Watch these tutorials to get most out of our Wealthbox</p>
                  <a href="#">Learn more</a>
                </div>
                <div className="col-lg-6">
                  <Formik
                    initialValues={credentials}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .email("Enter valid email!")
                        .required("Required!"),
                      password: Yup.string()
                        .min(5, "Must be a minimum of 5 characters")
                        .required("Required"),
                    })}
                    onSubmit={(values) => {
                      histroy.push("/dashboard");
                    }}
                  >
                    {(formik) => (
                      <form
                        className="mt-4 pt-2 mb-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="form-floating form-floating-custom mb-4">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            {...formik.getFieldProps("email")}
                          />
                          <label htmlFor="input-username">Username</label>
                          <div className="form-floating-icon">
                            <i className="bx bx-user"></i>
                          </div>
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                          <div className="validation-error">
                            {formik.errors.email}
                          </div>
                        ) : null}
                        <div className="form-floating form-floating-custom mb-4 auth-pass-inputgroup">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder=" Password"
                            {...formik.getFieldProps("password")}
                          />

                          <button
                            type="button"
                            className="btn btn-link position-absolute h-100 end-0 top-0"
                            id="password-addon"
                          ></button>
                          <label htmlFor="input-password">Password</label>
                          <div className="form-floating-icon">
                            <i className="bx bx-lock"></i>
                          </div>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                          <div className="validation-error">
                            {formik.errors.password}
                          </div>
                        ) : null}

                        <div className="mb-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light text-bold"
                            type="submit"
                          >
                            {loading ? (
                              <i className="bx bx-loader loading"></i>
                            ) : (
                              "Log In"
                            )}
                          </button>
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                          <p>
                            New to Tsavo? <a href="#">Sign up</a>
                          </p>
                          <p>Forgot password?</p>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
