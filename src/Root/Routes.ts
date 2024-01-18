import { Preloader } from "Tools/Preloader";
import type { ComponentModule, WrappedLoader } from "./types";

export class Routes {
  static preloaded = false;
  static routes = {
    home: this.wrapLoader(() => import("Pages/Home")),
    work: this.wrapLoader(() => import("Pages/Work")),
    contact: this.wrapLoader(() => import("Pages/Contact")),
    privacypolicy: this.wrapLoader(() => import("Pages/PrivacyPolicy")),
  };

  static wrapLoader(loader: () => Promise<ComponentModule>) {
    return () =>
      new Promise<ComponentModule>(resolve => {
        const promises: WrappedLoader = [loader()];
        if (!this.preloaded) {
          this.preloaded = true;
          promises.push(Preloader.initialize());
        }
        void Promise.all(promises).then(([component]) => {
          resolve(component);
        });
      });
  }
}
