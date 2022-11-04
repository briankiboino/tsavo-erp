import { createModel } from "@rematch/core";
import type { RootModel } from ".";

type AlertState = {
  type: string;
  message: string;
};

export const alert = createModel<RootModel>()({
  state: {
    type: "",
    message: "",
  } as AlertState,
  reducers: {
    setFailureAlert(state:AlertState, message: string) {
      return {
        ...state,
        type: "Failure",
        message: message,
      };
    },
    setAlert(state:AlertState, payload: any) {
      return {
        ...state,
        type: payload?.type,
        message: payload?.message,
      };
    },
    setSuccessAlert(state:AlertState, message: string) {
      return {
        ...state,
        type: "Success",
        message: message,
      };
    },
    clearAlert(state:AlertState) {
      return {
        ...state,
        type: "",
        message: "",
      };
    },
  },
  effects: (dispatc: any) => ({}),
});
