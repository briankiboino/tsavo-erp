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
    <React.Fragment>
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row header">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-bs-toggle="minimize"
            >
              <span className="icon-menu"></span>
            </button>
          </div>
          <div>
            <a className="navbar-brand brand-logo" href="index.html">
              <img src={logo} alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex justify-content- align-items-top shadow-sm">
          <ul className="navbar-nav d-flex justify-content-between w-50">
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Work</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">CRM</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Inventory</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Finance & Accounting</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Payroll</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Reports</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <form className="search-form" action="#">
                <i className="icon-search"></i>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                />
              </form>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator"
                id="notificationDropdown"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="icon-mail icon-lg"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="notificationDropdown"
              >
                <a className="dropdown-item py-3 border-bottom">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 4 new notifications{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">
                      Application Error
                    </h6>
                    <p className="fw-light small-text mb-0"> Just now </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">
                      Settings
                    </h6>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      Private message{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">
                      New user registration
                    </h6>
                    <p className="fw-light small-text mb-0"> 2 days ago </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator"
                id="countDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="icon-bell"></i>
                <span className="count"></span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="countDropdown"
              >
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 7 unread mails{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face10.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Marian Garner{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face12.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      David Grey{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face1.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Travis Jenkins{" "}
                    </p>
                    <p className="fw-light small-text mb-0">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <a
                className="nav-link"
                id="UserDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="img-xs rounded-circle"
                  src="https://ensure.poshpesa.com/assets/img/avatar.jpeg"
                  alt="Profile image"
                />{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="UserDropdown"
              >
                <div className="dropdown-header text-center">
                  <img
                    className="img-md rounded-circle"
                    src="images/faces/face8.jpg"
                    alt="Profile image"
                  />
                  <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p className="fw-light text-muted mb-0">
                    allenmoreno@gmail.com
                  </p>
                </div>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>{" "}
                  My Profile{" "}
                  <span className="badge badge-pill badge-danger">1</span>
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>{" "}
                  Messages
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>{" "}
                  Activity
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>{" "}
                  FAQ
                </a>
                <a className="dropdown-item">
                  <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                  Sign Out
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-bs-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </React.Fragment>
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
