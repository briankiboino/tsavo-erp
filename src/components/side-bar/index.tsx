/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "@redux/index";
const logo = require("../../assets/tsavo-erp-logo-removebg-preview.png");

function SideBar(props: any) {
  return (
    <aside className="sidebar-dark">
      <div
        className="mobile-close-sidebar-panel w-100 h-100"
        id="mobile_close_panel"
      ></div>
      <div className="main-sidebar" id="mobile_menu_collapse">
        <div className="sidebar-brand-box dropdown cursor-pointer ">
          <div
            className="dropdown-toggle sidebar-brand d-flex align-items-center justify-content-between  w-100"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="sidebar-brand-name">
              <h1
                className="mb-0 f-16 f-w-500 text-white-shade mt-0"
                data-placement="bottom"
                data-toggle="tooltip"
                data-original-title="Worksuite"
              >
                TSAVOERP
              </h1>
            </div>

            <div className="sidebar-brand-logo">
              <img src={logo} width={50}/>
            </div>
          </div>
        </div>
        <div className="sidebar-menu " id="sideMenuScroll">
          <ul>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading active"
                title="Dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  ></path>
                </svg>
                <span className="pl-3">Dashboard</span>
              </a>
            </li>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading"
                href="https://demo.worksuite.biz/account/clients"
                title="CRM"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-building"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                  ></path>
                  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
                </svg>
                <span className="pl-3">CRM</span>
              </a>
            </li>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading "
                title="PEOPLE"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                </svg>
                <span className="pl-3">People</span>
              </a>

              <div className="accordionItemContent pb-2">
                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/employees"
                  title="Employees"
                >
                  Employees
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/leaves"
                  title="Leaves"
                >
                  Leaves
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/shifts"
                  title="Shift Roster"
                >
                  Shift Roster
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/attendances"
                  title="Attendance"
                >
                  Attendance
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/holidays"
                  title="Holiday"
                >
                  Holiday
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/designations"
                  title="Designation"
                >
                  Designation
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/departments"
                  title="Department"
                >
                  Department
                </a>
              </div>
            </li>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading "
                title="Work"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path>
                </svg>
                <span className="pl-3">Work</span>
              </a>

              <div className="accordionItemContent pb-2">
                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/contracts"
                  title="Contracts"
                >
                  Contracts
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/projects"
                  title="Projects"
                >
                  Projects
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/tasks"
                  title="Tasks"
                >
                  Tasks
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/timelogs"
                  title="Time Logs"
                >
                  Time Logs
                </a>
              </div>
            </li>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading "
                title="Finance"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cash-coin"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"></path>
                </svg>
                <span className="pl-3">Finance & Accounting</span>
              </a>

              <div className="accordionItemContent pb-2">
                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/proposals"
                  title="Proposal"
                >
                  Proposal
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/estimates"
                  title="Estimates"
                >
                  Estimates
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/invoices"
                  title="Invoices"
                >
                  Invoices
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/payments"
                  title="Payments"
                >
                  Payments
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/creditnotes"
                  title="Credit Note"
                >
                  Credit Note
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/expenses"
                  title="Expenses"
                >
                  Expenses
                </a>
              </div>
            </li>

            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading"
                href="https://demo.worksuite.biz/account/assets"
                title="Inventory"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-display"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"></path>
                </svg>
                <span className="pl-3">Inventory</span>
                
              </a>
            </li>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color accordionItemHeading "
                title="Payroll"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-wallet"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path>
                </svg>
                <span className="pl-3">Payroll</span>

              </a>

              <div className="accordionItemContent pb-2">
                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/payroll/payroll"
                  title="Payroll"
                >
                  Payroll
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/payroll/employee-salary"
                  title="Employee Salary"
                >
                  Employee Salary
                </a>
              </div>
            </li>

            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color "
                title="Reports"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-graph-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                </svg>
                <span className="pl-3">Reports</span>
              </a>

              <div className="accordionItemContent pb-2">
                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/task-report"
                  title="Task Report"
                >
                  Task Report
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/time-log-report"
                  title="Time Log Report"
                >
                  Time Log Report
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/finance-report"
                  title="Finance Report"
                >
                  Finance Report
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/income-expense-report"
                  title="Income Vs Expense"
                >
                  Income Vs Expense
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/leave-report"
                  title="Leave Report"
                >
                  Leave Report
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/attendance-report"
                  title="Attendance Report"
                >
                  Attendance Report
                </a>

                <a
                  className="f-14 text-lightest"
                  href="https://demo.worksuite.biz/account/expense-report"
                  title="Expense Report"
                >
                  Expense Report
                </a>
              </div>
            </li>
            <li className="accordionItem closeIt">
              <a
                className="nav-item text-lightest f-15 sidebar-text-color"
                href="https://demo.worksuite.biz/account/company-settings"
                title="Settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path>
                </svg>
                <span className="pl-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center d-flex justify-content-between align-items-center position-fixed sidebarTogglerBox ">
        <button
          className="border-0 d-lg-block d-none text-lightest font-weight-bold"
          id="sidebarToggle"
        ></button>

        <p className="mb-0 text-dark-grey">ver 5.2.2</p>
      </div>
    </aside>
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
