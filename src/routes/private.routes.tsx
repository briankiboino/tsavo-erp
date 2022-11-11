import React, { Component } from "react";
import { RootState } from "@redux/index";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { Footer, Header } from "../components";
import SideBar from "../components/side-bar";

// import SideBar from '../_components/layout/sidebar';

const PrivateRoute = (props: any) => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-body-wrapper">
        <SideBar />
        <div className="body-wrapper clearfix">
          <section
            className="main-container bg-additional-grey"
            id="fullscreen"
          >
            <Route
              {...props}
              render={(props: any) =>
                !props?.isLoggedIn ? (
                  <Component {...props} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/",
                      state: { from: props.location },
                    }}
                  />
                )
              }
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state: RootState) {
  const { isLoggedIn } = state.authentication;
  return { isLoggedIn };
}

export default connect(mapStateToProps)(PrivateRoute);
