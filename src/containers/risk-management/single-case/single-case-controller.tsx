import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { RootState } from "src/redux";
import SingleCaseView from "./single-case-view";

const MyCasesViewController = (props: any) => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    props?.getCases(filters);
  }, []);

  return (
    <SingleCaseView
      loading={props?.loading}
      data={props?.case}
    />
  );
};

const mapStateToProps = (state: RootState) => {
  const loading: any = state?.loading.models.cases;
  const { cases } = state.cases;
  const { showOffCanvas } = state.components;
  return { loading, cases, showOffCanvas };
};

const mapDispatchToProps = (dispatch: any) => ({
  getCases: (filters: any) => dispatch.cases.getCases(filters),
  setOffCanvasVisibility: (components: boolean) =>
    dispatch.components.setOffCanvasVisibility(components),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCasesViewController);
