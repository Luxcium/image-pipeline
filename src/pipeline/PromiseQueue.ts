export class PromiseQueue {
  private queue: { promise: Promise<any>; priority: number }[] = [];
  private concurrencyLimit: number;
  private activePromises: number;

  constructor(concurrencyLimit: number = 5) {
    this.concurrencyLimit = concurrencyLimit;
    this.activePromises = 0;
  }

  enqueue<T>(promise: Promise<T>, priority: number = 0): void {
    this.queue.push({ promise, priority });
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  async executeAllSequential(): Promise<void> {
    for (const { promise } of this.queue) {
      await promise;
    }
    this.queue = [];
  }

  async executeAllParallel(): Promise<void> {
    const executePromise = async ({ promise }: { promise: Promise<any> }) => {
      this.activePromises++;
      await promise;
      this.activePromises--;
    };

    const promises = this.queue.map((item) => executePromise(item));
    await Promise.all(promises);
    this.queue = [];
  }

  async executeThrottledParallel(): Promise<void> {
    const executePromise = async ({ promise }: { promise: Promise<any> }) => {
      this.activePromises++;
      await promise;
      this.activePromises--;
    };

    while (this.queue.length > 0) {
      if (this.activePromises < this.concurrencyLimit) {
        const item = this.queue.shift();
        if (item) {
          executePromise(item);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }

    while (this.activePromises > 0) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  reset(): void {
    this.queue = [];
    this.activePromises = 0;
  }
}
