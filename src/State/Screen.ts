import { connect, createUseState } from "@figliolia/react-galena";
import { ScreenModel } from "Models/ScreenModel";

export const Screen = new ScreenModel();

export const connectScreen = connect(Screen);
export const useScreen = createUseState(Screen);
