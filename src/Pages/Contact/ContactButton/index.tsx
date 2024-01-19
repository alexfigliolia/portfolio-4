import React, { Component } from "react";
import { Button3D } from "Components/Button3D";
import type { IRouting } from "Models/types";
import { connectRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

export class ContactButtonRenderer extends Component<Props, State> {
  state: State = { reset: false };

  override UNSAFE_componentWillReceiveProps({ active }: Props) {
    if (!this.props.active && active) {
      TaskQueue.deferTask(() => {
        this.setState({ reset: true });
      }, 3100);
    }
  }

  override shouldComponentUpdate({ active }: Props, { reset }: State) {
    if (active !== this.props.active) return true;
    if (reset !== this.state.reset) return true;
    return false;
  }

  override render() {
    const { reset } = this.state;
    const { text, onClick, active } = this.props;
    return (
      <div
        className={`contact-button ${active ? " active" : ""} ${
          reset ? "reset" : ""
        }`}>
        <Button3D text={text} onClick={onClick} />
      </div>
    );
  }
}

interface Props {
  text: string;
  active: boolean;
  onClick: () => void;
}

interface State {
  reset: boolean;
}

const mSTP = ({ screenActive }: IRouting) => {
  return { active: screenActive };
};

export const ContactButton = connectRouter(mSTP)(ContactButtonRenderer);
