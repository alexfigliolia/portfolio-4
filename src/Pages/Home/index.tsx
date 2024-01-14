import React, { Component } from "react";
import { Page } from "Components/Page";
import type { IScreen } from "Models/types";
import "./styles.scss";
import { AlexText } from "Components/AlexText";
import { HomeButton } from "Components/HomeButton";

export default class HomeScreen extends Component<IScreen> {
  override shouldComponentUpdate() {
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
