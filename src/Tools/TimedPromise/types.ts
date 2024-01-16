export type Task<T> = () => Promise<T>;

export interface ITimedPromise<T> {
  task: Task<T>;
  threshold: number;
  onReject: (result: TimedPromiseRejection) => void;
  onResolve: (result: TimedPromiseResolution<T>) => void;
}

export type OnRejectFN = (result: TimedPromiseRejection) => void;
export type OnResultFN<T> = (result: TimedPromiseResolution<T>) => void;

interface TimedPromiseResult<T, R extends boolean> {
  result: T;
  rejected: R;
  remainingMS: number;
}

type TimedPromiseResolution<T> = TimedPromiseResult<T, false>;
type TimedPromiseRejection = TimedPromiseResult<unknown, true>;
