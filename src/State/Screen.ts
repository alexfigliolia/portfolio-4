import { connect } from "@figliolia/react-galena";
import { ScreenModel } from "Models/ScreenModel";

export const Screen = new ScreenModel();

export const connectScreen = connect(Screen);
