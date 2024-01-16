import React, { Component } from "react";
import { Button3D } from "Components/Button3D";
import type { IRouting } from "Models/types";
import { connectRouter } from "State/Routing";
import "./styles.scss";

export class HomeButtonRenderer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.nav = this.nav.bind(this);
  }

  override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  private nav() {
    window.location.hash = "#Work";
  }

  override render() {
    const { active } = this.props;
    return (
      <div className="home-button">
        <Button3D
          text="Work"
          delay={10000}
          active={active}
          onClick={this.nav}
        />
      </div>
    );
  }
}

interface Props {
  active: boolean;
}

const mSTP = ({ screenActive }: IRouting) => {
  return { active: screenActive };
};

export const HomeButton = connectRouter(mSTP)(HomeButtonRenderer);
