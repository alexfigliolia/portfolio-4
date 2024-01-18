import React, { Component } from "react";
import { Page } from "Components/Page";
import { AlexText } from "Components/AlexText";
import { Routing } from "State/Routing";
import { WorkButton } from "./WorkButton";
import "./styles.scss";

export default class Home extends Component<Props> {
  constructor(props: Props) {
    super(props);
    Routing.setMenuButtonDelay(3500);
  }

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <Page name="home">
        <div>
          <AlexText />
          <WorkButton />
        </div>
      </Page>
    );
  }
}

type Props = Record<string, never>;
