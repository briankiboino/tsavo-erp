import { Customer } from "../../../domain/models";
import React from "react";
import BreadCrumb from "../../../components/bread-crumb";

const SingleCaseView = ({
  loading,
  data,
}: {
  loading: boolean;
  data: Customer;
}) => {
  return (
    <React.Fragment>
      <BreadCrumb title="Single Case" />
      <div className="card">
        <div className="card-body">
          <div className="row mb-5">
            <div className="col-lg-2">
              <div className="avatar-xxl me-2">
                <img
                  src="https://ensure.poshpesa.com/assets/img/avatar.jpeg"
                  alt=""
                  className="img-fluid rounded-circle d-block img-thumbnail"
                />
              </div>
            </div>
            <div className="col-lg-9">
              <h3>Brian Kimutai</h3>
              <div className="d-flex justify-content-between">
                <span>
                  <i className="bx bx-envelope me-2"></i>
                  <span className="ml-2">brianoproff@gmail.com</span>
                </span>
                <span>
                  <i className="bx bx-phone me-2"></i>
                  <span className="ml-2">+254726159508</span>
                </span>
                <span>
                  <i className="bx bx-calendar me-2"></i>
                  <span className="ml-2">brianoproff@gmail.com</span>
                </span>
                <span>
                  <i className="bx bx-user me-2"></i>
                  <span className="ml-2">Male</span>
                </span>
              </div>
            </div>
          </div>

          <ul
            className="nav nav-tabs nav-tabs-custom nav-justified"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#home1"
                role="tab"
                aria-selected="true"
              >
                <span className="d-block d-sm-none">
                  <i className="fas fa-home"></i>
                </span>
                <span className="d-none d-sm-block">Personal Information</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#profile1"
                role="tab"
                aria-selected="false"
                tabIndex={1}
              >
                <span className="d-block d-sm-none">
                  <i className="far fa-user"></i>
                </span>
                <span className="d-none d-sm-block">Work Information</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#messages1"
                role="tab"
                aria-selected="false"
                tabIndex={1}
              >
                <span className="d-block d-sm-none">
                  <i className="far fa-envelope"></i>
                </span>
                <span className="d-none d-sm-block">Loan History</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#settings1"
                role="tab"
                aria-selected="false"
                tabIndex={1}
              >
                <span className="d-block d-sm-none">
                  <i className="fas fa-cog"></i>
                </span>
                <span className="d-none d-sm-block">Contact Information</span>
              </a>
            </li>
          </ul>

          <div className="tab-content p-3 text-muted">
            <div className="tab-pane active show" id="home1" role="tabpanel">
              <p className="mb-0">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui.
              </p>
            </div>
            <div className="tab-pane" id="profile1" role="tabpanel">
              <p className="mb-0">
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                single-origin coffee squid. Exercitation +1 labore velit, blog
                sartorial PBR leggings next level wes anderson artisan four loko
                farm-to-table craft beer twee. Qui photo booth letterpress,
                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                aesthetic magna delectus.
              </p>
            </div>
            <div className="tab-pane" id="messages1" role="tabpanel">
              <p className="mb-0">
                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                farm-to-table readymade. Messenger bag gentrify pitchfork
                tattooed craft beer, iphone skateboard locavore carles etsy
                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                mi whatever gluten-free carles.
              </p>
            </div>
            <div className="tab-pane" id="settings1" role="tabpanel">
              <p className="mb-0">
                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                art party before they sold out master cleanse gluten-free squid
                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                art party locavore wolf cliche high life echo park Austin. Cred
                vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                mustache readymade keffiyeh craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleCaseView;
