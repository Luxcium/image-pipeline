import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const fetchData: Processor<string, any> = async (container) => {
  try {
    const response = await fetch(container.data);
    const data = await response.json();
    return new DataContainer(data);
  } catch (error) {
    console.error('Error fetching data from URL:', container.data, 'Error:', error);
    throw error;
  }
};
