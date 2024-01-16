import type { IRouting } from "Models/types";
import { Routing, connectRouter } from "State/Routing";
import type { lazy } from "react";
import React, { Component, startTransition } from "react";

class RouteRenderer extends Component<Props, State> {
  state: State = { Page: null };
  constructor(props: Props) {
    super(props);
    this.hashChange = this.hashChange.bind(this);
  }

  override componentDidMount() {
    window.addEventListener("hashchange", this.hashChange);
  }

  override UNSAFE_componentWillReceiveProps({
    routes,
    routeName,
  }: Readonly<Props>) {
    if (routeName in routes) {
      this.setState({ Page: routes[routeName] });
    } else {
      this.setState({ Page: null });
    }
  }

  override componentWillUnmount() {
    window.removeEventListener("hashchange", this.hashChange);
  }

  private hashChange() {
    startTransition(() => {
      const { default: defaultRoute } = this.props;
      const hash = window.location.hash.slice(1).toLowerCase() || defaultRoute;
      Routing.changeRoute(hash);
    });
  }

  override render() {
    const { Page } = this.state;
    if (!Page) {
      return null;
    }
    return <Page />;
  }
}

interface Props {
  default: string;
  routeName: string;
  routes: Record<string, ReturnType<typeof lazy>>;
}

interface State {
  Page: ReturnType<typeof lazy> | null;
}

const mSTP = ({ routeName }: IRouting) => {
  return { routeName };
};

export const Router = connectRouter(mSTP)(RouteRenderer);
