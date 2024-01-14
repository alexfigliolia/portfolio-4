import { connectMulti } from "@figliolia/react-galena";
import { Screen } from "./Screen";
import { Routing } from "./Routing";

export const connectNavigation = connectMulti(Screen, Routing);
