import type { Task, TimedPromiseResolution } from "./types";

export class TimedPromise<T> {
  readonly task: Task<T>;
  readonly threshold: number;
  constructor(task: Task<T>, threshold: number) {
    this.task = task;
    this.threshold = threshold;
  }

  public async race() {
    const then = performance.now();
    return new Promise<TimedPromiseResolution<T>>((resolve, reject) => {
      void this.task()
        .then(result => {
          resolve({
            result,
            rejected: false,
            remainingMS: this.diff(then),
          });
        })
        .catch(error => {
          reject({
            result: error,
            rejected: true,
            remainingMS: this.diff(then),
          });
        });
    });
  }

  private diff(then: number) {
    const diff = performance.now() - then;
    if (diff > this.threshold) {
      return 0;
    }
    return this.threshold - diff;
  }
}
