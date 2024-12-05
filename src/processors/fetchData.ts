import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const fetchData: Processor<string, any> = (container) => {
  const promise = fetch(container.data)
    .then(response => response.json())
    .then(data => new DataContainer(data));

  return promise;
};
