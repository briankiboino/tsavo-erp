/* eslint-disable */
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { RootState } from "src/redux";
import { PaginatedData } from "../../../domain/models";
import CustomersView from "./view";

const CustomersViewController = ({
  getCustomers,
  loading,
  customers,
}: {
  getCustomers: any;
  loading: boolean;
  customers: PaginatedData;
}) => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    getCustomers(filters);
  }, []);

  return (
    <CustomersView
      loading={loading}
      data={customers}
      filters={filters}
      setFilters={setFilters}
      action={getCustomers}
    ></CustomersView>
  );
};

const mapStateToProps = (state: RootState) => {
  const loading: any = state?.loading.models.customers;
  const { customers } = state.customers;
  return { loading, customers };
};

const mapDispatchToProps = (dispatch: any) => ({
  getCustomers: (filters: any) => dispatch.customers.getCustomers(filters),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersViewController);
