import { connect } from "@figliolia/react-galena";
import { MenuModel } from "Models/MenuModel";
import { RoutingAndMenu } from "./States";

export const Menu = RoutingAndMenu.composeState(
  "Menu",
  {
    menuOpen: false,
    buttonDelay: 10000,
    linksVisible: false,
  },
  MenuModel,
);

export const connectMenu = connect(Menu);
