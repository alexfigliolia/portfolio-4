import type { ITimedPromise, OnRejectFN, OnResultFN, Task } from "./types";

export class TimedPromise<T> {
  readonly task: Task<T>;
  readonly threshold: number;
  readonly onReject: OnRejectFN;
  readonly onResolve: OnResultFN<T>;
  constructor({ task, onReject, onResolve, threshold }: ITimedPromise<T>) {
    this.task = task;
    this.onReject = onReject;
    this.onResolve = onResolve;
    this.threshold = threshold;
  }

  public async race() {
    const then = performance.now();
    try {
      const result = await this.task();
      return this.onResolve({
        result,
        rejected: false,
        remainingMS: this.diff(then),
      });
    } catch (error: unknown) {
      return this.onReject({
        result: error,
        rejected: true,
        remainingMS: this.diff(then),
      });
    }
  }

  private diff(then: number) {
    const diff = performance.now() - then;
    if (diff > this.threshold) {
      return 0;
    }
    return this.threshold - diff;
  }
}
