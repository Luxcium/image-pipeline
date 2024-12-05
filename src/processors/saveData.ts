import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';
import { promiseQueue } from '../pipeline/PromiseQueue';

export const saveData: Processor<any, void> = (container) => {
  const promise = new Promise<void>((resolve) => {
    console.log('Data saved:', container.data);
    resolve();
  });

  promiseQueue.enqueue(promise);
  return promise;
};
