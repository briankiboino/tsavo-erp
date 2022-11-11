/* eslint-disable */
import React, { useEffect } from "react";
import { connect } from "react-redux";

const Dashboard = (props) => {
  // const { getUtilities } = props;

  // useEffect(() => {
  //    getUtilities();
  // }, [])

  return (
    <div className="px-4 py-0 py-lg-3  border-top-0 admin-dashboard">
      <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6 mb-3">
          <a href="https://demo.worksuite.biz/account/clients">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Total Clients
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">9</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-users text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 mb-3">
          <a href="https://demo.worksuite.biz/account/employees">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Total Employees
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">10</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-user text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 mb-3">
          <a href="https://demo.worksuite.biz/account/projects">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Total Projects
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">8</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-layer-group text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 mb-3">
          <a href="https://demo.worksuite.biz/account/invoices?status=pending">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Due Invoices
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">8</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-file-invoice text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6">
          <a href="https://demo.worksuite.biz/account/time-log-report">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Hours Logged
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">48 hrs </span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-clock text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6">
          <a href="https://demo.worksuite.biz/account/tasks?status=pending_task&amp;type=public">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Pending Tasks
                  <i
                    class="fa fa-question-circle"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Private tasks not included"
                    data-html="true"
                    data-trigger="hover"
                  ></i>
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">13</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-tasks text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6">
          <a href="https://demo.worksuite.biz/account/attendances">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Today Attendance
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">0/10</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-calendar-check text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6">
          <a href="https://demo.worksuite.biz/account/tickets?status=open">
            <div class="bg-white p-20 rounded b-shadow-4 d-flex justify-content-between align-items-center">
              <div class="d-block text-capitalize">
                <h5 class="f-15 f-w-500 mb-20 text-darkest-grey">
                  Unresolved Tickets
                </h5>
                <div class="d-flex">
                  <p class="mb-0 f-15 font-weight-bold text-blue text-primary d-grid">
                    <span id="">4</span>
                  </p>
                </div>
              </div>
              <div class="d-block">
                <i class="fa fa-ticket-alt text-lightest f-18"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { state };
}

const actionCreators = (dispatch, props) => {
  return {
    getUtilities: () => {},
  };
};

export default connect(mapStateToProps, actionCreators)(Dashboard);
