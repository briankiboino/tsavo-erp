import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import { UserCredentials } from "@models/index";
import { postRequest, getRequest, customPostRequest } from "../../utilities";
let user = localStorage.getItem("3bcbaf8f-5d37-419a-adff-14e949447bc1");

type Authentication = {
  isLoggedIn: boolean;
  user: any;
}

export const authentication = createModel<RootModel>()({
  state: user
    ? {
        isLoggedIn: true,
        user: JSON.parse(user),
      }
    : {
        isLoggedIn: false,
        user: {},
      } as Authentication,
  reducers: {
    setAuthStatusLoggedIn(state: Authentication, user:any) {
      return {
        ...state,
        isLoggedIn: true,
        user: user,
      };
    },
    setAuthStatusLoggedOut(state: Authentication, user: any) {
      return {
        ...state,
        isLoggedIn: false,
        user: user,
      };
    },
  },
  effects: (dispatch: any) => ({
   
  }),
});
