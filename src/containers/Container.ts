/**
 * Interface for data encapsulation.
 */
export interface Container<T> {
  data: T;
  id?: string;
  timestamp?: Date;
}
