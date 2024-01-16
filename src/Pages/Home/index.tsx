import React, { Component } from "react";
import { Page } from "Components/Page";
import type { IScreen } from "Models/types";
import { AlexText } from "Components/AlexText";
import { HomeButton } from "Components/HomeButton";
import { connectScreen } from "State/Screen";
import "./styles.scss";

class Home extends Component<IScreen> {
  override shouldComponentUpdate({ height, width }: IScreen) {
    const curProps = this.props;
    if (width !== curProps.width) return true;
    if (height !== curProps.height) return true;
    return false;
  }

  override render() {
    const { height, width } = this.props;
    return (
      <Page name="home">
        <div style={{ height, width }}>
          <AlexText />
          <HomeButton />
        </div>
      </Page>
    );
  }
}

const mSTP = ({ height, width }: IScreen) => {
  return { height, width };
};

export default connectScreen(mSTP)(Home);
