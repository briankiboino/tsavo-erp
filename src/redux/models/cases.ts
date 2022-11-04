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

type CasesState = {
  case: Customer;
  cases: PaginatedData;
};

export const cases = createModel<RootModel>()({
  state: {
    case: {
      id: "",
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
    cases: {
      data:[ {
        id: "0ba4c130-0d37-4f4b-834f-73fb64c78cc1",
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
  } as CasesState,
  reducers: {
    setCases(state: any, cases: PaginatedData) {
      return {
        ...state,
        cases: cases,
      };
    },
    setCase(state: CasesState, caseProfile: Customer) {
      return {
        ...state,
        case: caseProfile,
      };
    },
  },
  effects: (dispatch) => ({
    async getCases(filters) {
      try {
        dispatch.cases.setCases(
          {
            currentPage:1,
            nextPage: 2,
            previousPage: 0,
            perPage: 10,
            data:[
              {
                id: "0ba4c130-0d37-4f4b-834f-73fb64c78cc1",
                phone_number: "+254712287512",
                name: "Brian Kimutai",
                applied_loan: "20000",
                audited: "Pending",
                loan_limit: "300000",
                date_created: "20-10-2022",
                last_login: "20-10-2022",
                disburse: "disbursed",
                status: "inactive",
              },
              {
                id: "0ba4c130-0d37-4f4b-834f-73fb64c78cc1",
                phone_number: "+254712287512",
                name: "Elias Baya",
                applied_loan: "20000",
                audited: "Pending",
                loan_limit: "300000",
                date_created: "20-10-2022",
                last_login: "20-10-2022",
                disburse: "disbursed",
                status: "active",
              },
              {
                id: "0ba4c130-0d37-4f4b-834f-73fb64c78cc1",
                phone_number: "+254712287512",
                name: "Duncan Gitonga",
                applied_loan: "20000",
                audited: "Pending",
                loan_limit: "300000",
                date_created: "20-10-2022",
                last_login: "20-10-2022",
                disburse: "pending",
                status: "inactive",
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
