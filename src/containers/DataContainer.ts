import { Container } from './Container';

export class DataContainer<T> implements Container<T> {
  constructor(public readonly data: T, public readonly id?: string, public readonly timestamp?: Date) {}
}
