import { Container } from '../containers/Container';

export type Processor<T, U> = (container: Container<T>) => Promise<Container<U>>;
