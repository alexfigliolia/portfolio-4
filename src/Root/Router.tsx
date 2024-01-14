import type { lazy } from "react";
import React, { Component, startTransition } from "react";

export default class Router extends Component<Props, State> {
  state: State = { Page: null };
  constructor(props: Props) {
    super(props);
    this.hashChange = this.hashChange.bind(this);
  }

  override componentDidMount() {
    this.hashChange();
    window.addEventListener("hashchange", this.hashChange);
  }

  override componentWillUnmount() {
    window.removeEventListener("hashchange", this.hashChange);
  }

  private hashChange() {
    startTransition(() => {
      const { routes, default: defaultRoute } = this.props;
      const hash = window.location.hash.slice(1).toLowerCase() || defaultRoute;
      if (hash in routes) {
        this.setState({ Page: routes[hash] });
      } else {
        this.setState({ Page: null });
      }
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
  routes: Record<string, ReturnType<typeof lazy>>;
}

interface State {
  Page: ReturnType<typeof lazy> | null;
}
