import { PromiseQueue } from '../../src/pipeline/PromiseQueue';

describe('PromiseQueue', () => {
  let promiseQueue: PromiseQueue;

  beforeEach(() => {
    promiseQueue = new PromiseQueue();
  });

  it('should enqueue and execute promises sequentially', async () => {
    const results: number[] = [];
    const promise1 = new Promise<void>((resolve) => {
      setTimeout(() => {
        results.push(1);
        resolve();
      }, 100);
    });
    const promise2 = new Promise<void>((resolve) => {
      setTimeout(() => {
        results.push(2);
        resolve();
      }, 50);
    });

    promiseQueue.enqueue(promise1);
    promiseQueue.enqueue(promise2);

    await promiseQueue.executeAllSequential();

    expect(results).toEqual([1, 2]);
  });

  it('should enqueue and execute promises in parallel', async () => {
    const results: number[] = [];
    const promise1 = new Promise<void>((resolve) => {
      setTimeout(() => {
        results.push(1);
        resolve();
      }, 100);
    });
    const promise2 = new Promise<void>((resolve) => {
      setTimeout(() => {
        results.push(2);
        resolve();
      }, 50);
    });

    promiseQueue.enqueue(promise1);
    promiseQueue.enqueue(promise2);

    await promiseQueue.executeAllParallel();

    expect(results).toEqual([2, 1]);
  });

  it('should clear the queue after execution', async () => {
    const promise1 = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });

    promiseQueue.enqueue(promise1);

    await promiseQueue.executeAllSequential();

    expect(promiseQueue['queue'].length).toBe(0);
  });
});
