import { connectMulti } from "@figliolia/react-galena";
import { Screen } from "./Screen";
import { Routing } from "./Routing";
import { Menu } from "./Menu";
import { Work } from "./Work";

export const connectNavigation = connectMulti(Screen, Routing);

export const connectRoutingAndMenu = connectMulti(Menu, Routing);

export const workConnection = connectMulti(Work, Routing);

export const connectNavigationAndMenu = connectMulti(Screen, Routing, Menu);
