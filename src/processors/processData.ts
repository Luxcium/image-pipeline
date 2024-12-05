import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const processData: Processor<any, any> = async (container) => {
  const processedData = { ...container.data, processed: true };
  return new DataContainer(processedData);
};
