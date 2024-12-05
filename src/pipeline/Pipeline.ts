import { Processor } from '../processors/Processor';
import { Container } from '../containers/Container';

class PromiseQueue {
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

const promiseQueue = new PromiseQueue();

export class Pipeline<TInput, TOutput> {
  private processors: Processor<any, any>[] = [];

  addProcessor<T, U>(processor: Processor<T, U>): Pipeline<TInput, U> {
    this.processors.push(processor);
    return this as unknown as Pipeline<TInput, U>;
  }

  async executeSequentially(initialContainer: Container<TInput>): Promise<Container<TOutput>> {
    let currentContainer: Container<any> = initialContainer;
    for (const processor of this.processors) {
      currentContainer = await processor(currentContainer);
    }
    return currentContainer as Container<TOutput>;
  }

  async executeInParallel(initialContainer: Container<TInput>): Promise<Container<TOutput>> {
    const promises = this.processors.map((processor) => processor(initialContainer));
    const results = await Promise.all(promises);
    return results[results.length - 1] as Container<TOutput>;
  }
}
