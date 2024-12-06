import { Processor } from '../processors/Processor';
import { Container } from '../containers/Container';
import { PromiseQueue } from './PromiseQueue';

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
      try {
        currentContainer = await this.createUnawaitedPromise(processor, currentContainer);
      } catch (error) {
        console.error('Error during sequential execution:', error);
        throw error;
      }
    }
    return currentContainer as Container<TOutput>;
  }

  async executeInParallel(initialContainer: Container<TInput>): Promise<Container<TOutput>> {
    try {
      const promises = this.processors.map((processor) => this.createUnawaitedPromise(processor, initialContainer));
      const results = await Promise.all(promises);
      return results[results.length - 1] as Container<TOutput>;
    } catch (error) {
      console.error('Error during parallel execution:', error);
      throw error;
    }
  }

  executeUnawaited(initialContainer: Container<TInput>): void {
    this.processors.forEach((processor) => {
      const promise = this.createUnawaitedPromise(processor, initialContainer);
      promiseQueue.enqueue(promise);
    });
  }

  private createUnawaitedPromise<T, U>(processor: Processor<T, U>, container: Container<T>): Promise<Container<U>> {
    const promise = processor(container);
    promiseQueue.enqueue(promise);
    return promise;
  }
}
