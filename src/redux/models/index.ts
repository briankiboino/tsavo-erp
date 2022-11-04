import { Models } from "@rematch/core"
import { customers } from "./customer";
import { alert } from "./alert";
import { authentication } from "./authentication";
import { components } from "./components";
import { cases } from "./cases"
 
export interface RootModel extends Models<RootModel> {
  customers: typeof customers;
  alert: typeof alert;
  authentication: typeof authentication;
  components: typeof components;
  cases: typeof cases;
}
 
export const models: RootModel = {
     customers,
     alert,
     authentication,
     components,
     cases,
}