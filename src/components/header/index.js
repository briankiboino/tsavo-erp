/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import userimage from "../../assets/default-user-image.png";
import { SUPER_ADMIN_ROUTES } from "../../utilities";
import { Link } from "react-router-dom";
import logo from "../../assets/tsavo-erp-logo-removebg-preview.png";

const Header = (props) => {
  const { position, username, signOut } = props;
  let menu_items = [];

  switch (position) {
    default:
      menu_items = SUPER_ADMIN_ROUTES;
  }

  return (
      <header class="main-header clearfix bg-white" id="header">
        <div class="navbar-left float-left d-flex align-items-center">
          <div class="page-title d-none d-lg-flex">
            <div class="page-heading">
              <h2 class="mb-0 pr-3 text-dark f-18 font-weight-bold">
                Dashboard
                <span class="text-lightest f-12 f-w-500 ml-2">
                  <a href="https://demo.worksuite.biz" class="text-lightest">
                    Home
                  </a>{" "}
                  • Dashboard
                </span>
              </h2>
            </div>
          </div>

          <div
            class="d-block d-lg-none menu-collapse cursor-pointer position-relative"
            onclick="openMobileMenu()"
          >
            <div class="mc-wrap">
              <div class="mcw-line"></div>
              <div class="mcw-line center"></div>
              <div class="mcw-line"></div>
            </div>
          </div>
        </div>

        <div class="page-header-right float-right d-flex align-items-center">
          <ul>
            <li>
              <div class="d-flex align-items-center">
                <a
                  href="javascript:;"
                  class="d-block header-icon-box open-search"
                >
                  <i class="fa fa-search f-16 text-dark-grey"></i>
                </a>
              </div>
            </li>

            <li>
              <div class="d-flex align-items-center">
                <a
                  href="https://demo.worksuite.biz/account/sticky-notes"
                  class="d-block header-icon-box openRightModal"
                >
                  <i class="fa fa-sticky-note f-16 text-dark-grey"></i>
                </a>
              </div>
            </li>

            <li>
              <div class="add_box dropdown">
                <a
                  class="d-block dropdown-toggle header-icon-box"
                  type="link"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-plus-circle f-16 text-dark-grey"></i>
                </a>
              </div>
            </li>

            <li>
              <div class="notification_box dropdown">
                <a
                  class="d-block dropdown-toggle header-icon-box show-user-notifications"
                  type="link"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-bell f-16 text-dark-grey"></i>
                </a>
              </div>
            </li>

            <li>
              <div class="logout_box">
                <a
                  class="d-block header-icon-box"
                  href="javascript:;"
                  onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();"
                >
                  <i class="fa fa-power-off f-16 text-dark-grey"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>
  );
};

function mapStateToProps(state) {
  const { position, username } = state.authentication.user;
  return { position, username };
}

const mapDispatchToProps = (dispacth) => ({
  signOut: () => dispacth.authentication.signOut(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
