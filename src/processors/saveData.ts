import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const saveData: Processor<any, void> = async (container) => {
  console.log('Data saved:', container.data);
  return new DataContainer(undefined);
};
