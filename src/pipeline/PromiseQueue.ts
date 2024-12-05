export class PromiseQueue {
  private queue: Promise<any>[] = [];

  enqueue<T>(promise: Promise<T>): void {
    this.queue.push(promise);
  }

  async executeAllSequential(): Promise<void> {
    for (const promise of this.queue) {
      await promise;
    }
    this.queue = [];
  }

  async executeAllParallel(): Promise<void> {
    await Promise.all(this.queue);
    this.queue = [];
  }

  reset(): void {
    this.queue = [];
  }
}
