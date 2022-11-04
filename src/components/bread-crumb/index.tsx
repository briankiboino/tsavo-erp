import React from "react";

const BreadCrumb = ({ title }: { title: string }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">{title}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <span>Layouts</span>
              </li>
              <li className="breadcrumb-item active">Horizontal</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
