import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const processData: Processor<any, any> = async (container) => {
  try {
    const processedData = { ...container.data, processed: true };
    return new DataContainer(processedData);
  } catch (error) {
    console.error('Error processing data:', error);
    throw error;
  }
};
