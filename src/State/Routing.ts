import { connect, createUseState } from "@figliolia/react-galena";
import { RoutingModel } from "Models/RoutingModel";
import { RoutingAndMenu } from "./States";

export const Routing = RoutingAndMenu.composeState(
  "Routing",
  {
    loading: true,
    routeName: "home",
    screenActive: false,
    classes: "screen shrink flip",
  },
  RoutingModel,
);

export const connectRouter = connect(Routing);
export const useRouter = createUseState(Routing);
