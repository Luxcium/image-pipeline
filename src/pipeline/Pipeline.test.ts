import { Pipeline } from './Pipeline';
import { fetchData } from '../processors/fetchData';
import { processData } from '../processors/processData';
import { saveData } from '../processors/saveData';
import { DataContainer } from '../containers/DataContainer';
import { PromiseQueue } from './PromiseQueue';

describe('Pipeline', () => {
  let promiseQueue: PromiseQueue;

  beforeEach(() => {
    promiseQueue = new PromiseQueue();
  });

  it('should execute processors sequentially', async () => {
    const pipeline = new Pipeline<string, void>()
      .addProcessor(fetchData)
      .addProcessor(processData)
      .addProcessor(saveData);

    const initialContainer = new DataContainer('https://api.example.com/data');

    const result = await pipeline.executeSequentially(initialContainer);

    expect(result).toBeDefined();
  });

  it('should execute processors in parallel', async () => {
    const pipeline = new Pipeline<string, void>()
      .addProcessor(fetchData)
      .addProcessor(processData)
      .addProcessor(saveData);

    const initialContainer = new DataContainer('https://api.example.com/data');

    const result = await pipeline.executeInParallel(initialContainer);

    expect(result).toBeDefined();
  });

  it('should execute unawaited promises', () => {
    const pipeline = new Pipeline<string, void>()
      .addProcessor(fetchData)
      .addProcessor(processData)
      .addProcessor(saveData);

    const initialContainer = new DataContainer('https://api.example.com/data');

    pipeline.executeUnawaited(initialContainer);

    expect(promiseQueue['queue'].length).toBe(3);
  });
});
