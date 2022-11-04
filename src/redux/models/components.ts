import { createModel } from "@rematch/core";
import type { RootModel } from ".";

type ComponentsState = {
  showOffCanvas: boolean
};

export const components = createModel<RootModel>()({
  state: {
   showOffCanvas: false
  } as ComponentsState,
  reducers: {
    setOffCanvasVisibility(state:ComponentsState, show: boolean) {
      return {
        ...state,
        showOffCanvas: show
      };
    },
  },
});
