import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const saveData: Processor<any, void> = async (container) => {
  try {
    const promise = new Promise<void>((resolve) => {
      console.log('Data saved:', container.data);
      resolve();
    });

    return promise;
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};
