/**
 * Interface for data encapsulation.
 */
export interface Container<T> {
  /**
   * Retrieves the encapsulated data.
   * @returns The encapsulated data.
   */
  getData(): T;

  /**
   * Sets the encapsulated data.
   * @param data - The data to encapsulate.
   */
  setData(data: T): void;
}
