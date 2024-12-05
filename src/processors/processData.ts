import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';
import { promiseQueue } from '../pipeline/PromiseQueue';

export const processData: Processor<any, any> = (container) => {
  const promise = new Promise<DataContainer<any>>((resolve) => {
    const processedData = { ...container.data, processed: true };
    resolve(new DataContainer(processedData));
  });

  promiseQueue.enqueue(promise);
  return promise;
};
