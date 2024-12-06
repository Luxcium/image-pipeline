import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const saveData: Processor<any, void> = async (container) => {
  const promise = new Promise<void>((resolve) => {
    try {
      console.log('Data saved:', container.data);
      resolve();
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  });

  return promise;
};
