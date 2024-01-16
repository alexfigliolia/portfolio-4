import React, { Component } from "react";
import { Page } from "Components/Page";
import { AlexText } from "Components/AlexText";
import { HomeButton } from "Components/HomeButton";
import "./styles.scss";

export default class Home extends Component<Record<string, never>> {
  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <Page name="home">
        <div>
          <AlexText />
          <HomeButton />
        </div>
      </Page>
    );
  }
}
