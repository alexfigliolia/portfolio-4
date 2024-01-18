import { connect } from "@figliolia/react-galena";
import { WorkModel } from "Models/WorkModel";

export const Work = new WorkModel();

export const connectWork = connect(Work);
