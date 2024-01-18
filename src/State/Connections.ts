import { connectMulti } from "@figliolia/react-galena";
import { Screen } from "./Screen";
import { Routing } from "./Routing";
import { Menu } from "./Menu";

export const connectNavigation = connectMulti(Screen, Routing);

export const connectRoutingAndMenu = connectMulti(Menu, Routing);

export const connectNavigationAndMenu = connectMulti(Screen, Routing, Menu);
