import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "@redux/index";

function SideBar(props: any) {
  return (
    <nav className="sidebar sidebar-offcanvas shadow-sm" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="mdi mdi-grid-large menu-icon"></i>
            <span className="menu-title">Admin Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="menu-icon mdi mdi-account-circle-outline"></i>
            <span className="menu-title">Private Dashboard</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state: RootState) => {
  const loading = state.loading.models.authentication;
  const { isLoggedIn, user } = state.authentication;
  return { loading, isLoggedIn, user };
};

const mapDispatchToProps = (dispacth: any) => ({
  signOut: () => dispacth.authentication.signOut(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
