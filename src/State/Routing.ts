import { connect, createUseState } from "@figliolia/react-galena";
import { RoutingModel } from "Models/RoutingModel";

export const Routing = new RoutingModel();

export const connectRouter = connect(Routing);
export const useRouter = createUseState(Routing);
