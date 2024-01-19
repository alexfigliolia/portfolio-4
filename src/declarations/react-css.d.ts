import "react";

declare module "react" {
  export interface CSSProperties {
    "--background-small"?: string;
    "--background-large"?: string;
  }
}
