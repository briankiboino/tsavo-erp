/* eslint-disable */
import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import {
  postRequest,
  getRequest,
  patchRequest,
  putRequest,
} from "../../utilities";

import { Customer, PaginatedData } from "../../domain/models";

type CustomersState = {
  customer: Customer;
  customers: PaginatedData;
};

export const customers = createModel<RootModel>()({
  state: {
    customer: {
      phone_number: "",
      name: "",
      applied_loan: "",
      audited: "",
      loan_limit: "",
      date_created: "",
      last_login: "",
      disburse: "",
      status: "",
    },
    customers: {
      data:[ {
        phone_number: "0712287512",
        name: "Brian",
        applied_loan: "20000",
        audited: "",
        loan_limit: "25000",
        date_created: "",
        last_login: "",
        disburse: "",
        status: "active",
      }]
    }
    ,
  } as CustomersState,
  reducers: {
    setCustomers(state: any, customers: PaginatedData) {
      return {
        ...state,
        customers: customers,
      };
    },
    setCustomerProfile(state: CustomersState, profile: Customer) {
      return {
        ...state,
        customer: profile,
      };
    },
  },
  effects: (dispatch) => ({
    async getCustomers(filters) {
      try {
        dispatch.customers.setCustomers(
          {
            currentPage:1,
            nextPage: 2,
            previousPage: 0,
            perPage: 10,
            data:[
              {
                phone_number: "+254712287512",
                name: "Brian",
                applied_loan: "20000",
                audited: "Pending",
                loan_limit: "300000",
                date_created: "20-10-2022",
                last_login: "20-10-2022",
                disburse: "Pending",
                status: "Active",
              },
              {
                phone_number: "+254712287512",
                name: "Brian",
                applied_loan: "20000",
                audited: "Pending",
                loan_limit: "300000",
                date_created: "20-10-2022",
                last_login: "20-10-2022",
                disburse: "Pending",
                status: "Active",
              },
              {
                phone_number: "+254712287512",
                name: "Brian",
                applied_loan: "20000",
                audited: "Pending",
                loan_limit: "300000",
                date_created: "20-10-2022",
                last_login: "20-10-2022",
                disburse: "Pending",
                status: "Active",
              },
            ],
            totalPages: 2,
            totalRecords: 2
          }
        );
      } catch (error: any) {
        dispatch.alert.setFailureAlert(error?.message);
      }
    },
  }),
});
