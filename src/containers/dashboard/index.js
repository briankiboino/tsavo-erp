/* eslint-disable */
import React, { useEffect } from "react";
import { connect } from "react-redux";

const Dashboard = (props) => {
  // const { getUtilities } = props;

  // useEffect(() => {
  //    getUtilities();
  // }, [])

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <div className="home-tab">
            <div className="tab-content tab-content-basic">
              <div
                className="tab-pane fade show active"
                id="overview"
                role="tabpanel"
                aria-labelledby="overview"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="statistics-details row">
                      <div className="card bg-light card-rounded stretch-card col-md-2 me-1">
                        <div className="card-body pb-0">
                          <h4 className="card-title card-title-dash text-dark mb-4">
                            Total Projects
                          </h4>
                          <h3 className="rate-percentage">32.53%</h3>
                          <p className="text-danger d-flex">
                            <i className="mdi mdi-menu-down"></i>
                            <span>-0.5%</span>
                          </p>
                        </div>
                      </div>
                      <div className="card bg-light card-rounded col-md-2 me-1">
                        <div className="card-body pb-0">
                          <h4 className="card-title card-title-dash text-dark mb-4">
                            Total Clients
                          </h4>
                          <h3 className="rate-percentage">32.53%</h3>
                          <p className="text-danger d-flex">
                            <i className="mdi mdi-menu-down"></i>
                            <span>-0.5%</span>
                          </p>
                        </div>
                      </div>
                      <div className="card bg-light card-rounded col-md-2 me-1">
                        <div className="card-body pb-0">
                          <h4 className="card-title card-title-dash text-dark mb-4">
                            Due Invoices
                          </h4>
                          <h3 className="rate-percentage">32.53%</h3>
                          <p className="text-danger d-flex">
                            <i className="mdi mdi-menu-down"></i>
                            <span>-0.5%</span>
                          </p>
                        </div>
                      </div>
                      <div className="card bg-light card-rounded col-md-2 me-1">
                        <div className="card-body pb-0">
                          <h4 className="card-title card-title-dash text-dark mb-4">
                            Pending Tasks
                          </h4>
                          <h3 className="rate-percentage">32.53%</h3>
                          <p className="text-danger d-flex">
                            <i className="mdi mdi-menu-down"></i>
                            <span>-0.5%</span>
                          </p>
                        </div>
                      </div>
                      <div className="card bg-light card-rounded col-md-2 me-1">
                        <div className="card-body pb-0">
                          <h4 className="card-title card-title-dash text-dark mb-4">
                            Total Vendors
                          </h4>
                          <h3 className="rate-percentage">32.53%</h3>
                          <p className="text-danger d-flex">
                            <i className="mdi mdi-menu-down"></i>
                            <span>-0.5%</span>
                          </p>
                        </div>
                      </div>
                      <div className="card bg-light card-rounded col-md-2">
                        <div className="card-body pb-0">
                          <h4 className="card-title card-title-dash text-dark mb-4">
                            Faulty Machines
                          </h4>
                          <h3 className="rate-percentage">32.53%</h3>
                          <p className="text-danger d-flex">
                            <i className="mdi mdi-menu-down"></i>
                            <span>-0.5%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 d-flex flex-column">
                    <div className="row flex-grow">
                      <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                        <div className="card card-rounded">
                          <div className="card-body">
                            <div className="d-sm-flex justify-content-between align-items-start">
                              <div>
                                <h4 className="card-title card-title-dash">
                                  Performance Line Chart
                                </h4>
                                <h5 className="card-subtitle card-subtitle-dash">
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </h5>
                              </div>
                              <div id="performance-line-legend"></div>
                            </div>
                            <div className="chartjs-wrapper mt-5">
                              <canvas id="performaneLine"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex flex-column">
                    <div className="row flex-grow">
                      <div className="col-12 grid-margin stretch-card">
                        <div className="card card-rounded">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <h4 className="card-title card-title-dash">
                                    Type By Amount
                                  </h4>
                                </div>
                                <canvas
                                  className="my-auto"
                                  id="doughnutChart"
                                  height="200"
                                ></canvas>
                                <div
                                  id="doughnut-chart-legend"
                                  className="mt-5 text-center"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                        <div className="card card-rounded">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                  <div className="circle-progress-width">
                                    <div
                                      id="totalVisitors"
                                      className="progressbar-js-circle pr-2"
                                    ></div>
                                  </div>
                                  <div>
                                    <p className="text-small mb-2">
                                      Total Visitors
                                    </p>
                                    <h4 className="mb-0 fw-bold">26.80%</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="circle-progress-width">
                                    <div
                                      id="visitperday"
                                      className="progressbar-js-circle pr-2"
                                    ></div>
                                  </div>
                                  <div>
                                    <p className="text-small mb-2">
                                      Visits per day
                                    </p>
                                    <h4 className="mb-0 fw-bold">9065</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
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
