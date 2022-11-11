/* eslint-disable */
import React from "react";

import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { UserCredentials } from "./model";
const logo =  require("../../assets/tsavo-erp-logo-removebg-preview.png");

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
    <div className="container-fluid bg-grey login_section">
      <div className="content-wrapper d-flex align-items-center auth px-0">
       <div className="container d-flex align-items-center">
       <div className="row w-100 mx-0" style={{ margin: "auto" }}>
          <div className="col-lg-12">
            <img src={logo} alt='logo' className="mb-1 center"/>
            <div className="auth-form-light text-left px-4 bg-light">
              <div className="row">
                <div className="col-lg-5 px-5 py-5" style={{
                  borderRight: "1px solid #E3E3E3"
                }}>
                  <iframe
                    width="350"
                    height="200"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                  <h2 className="mt-4 mb-4 heading-5">Product Tours</h2>
                  <h6 className="mb-4 heading-5">Watch these tutorials to get most out of our Wealthbox</h6>
                  <a href="#">Learn more</a>
                </div>
                <div className="col-lg-7 px-5 py-4">
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
                        <h2 className="mb-4">Login</h2>
                        <div className="form-floating form-floating-custom mb-4">
                        <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            className="form-control height-50 f-15 light_text"
                            id="email"
                            placeholder="Email"
                            {...formik.getFieldProps("email")}
                          />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                          <div className="validation-error">
                            {formik.errors.email}
                          </div>
                        ) : null}
                        <div className="form-floating form-floating-custom mb-4 auth-pass-inputgroup">
                        <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control height-50 f-15 light_text"
                            id="password"
                            placeholder=" Password"
                            {...formik.getFieldProps("password")}
                          />

                          <button
                            type="button"
                            className="btn btn-link position-absolute h-100 end-0 top-0"
                            id="password-addon"
                          ></button>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                          <div className="validation-error">
                            {formik.errors.password}
                          </div>
                        ) : null}

                        <div className="mb-4">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light text-bold f-w-500 rounded w-100 height-50 f-18"
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
                          <label>
                            New to Tsavo? <a href="#">Sign up</a>
                          </label>
                          <label>Forgot password?</label>
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
    </div>
  );
};

export default SignInView;
