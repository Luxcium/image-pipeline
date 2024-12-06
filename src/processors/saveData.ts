import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const saveData: Processor<any, void> = (container) => {
  const promise = new Promise<void>((resolve) => {
    console.log('Data saved:', container.data);
    resolve();
  });

  return promise;
};
