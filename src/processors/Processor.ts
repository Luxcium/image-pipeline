/**
 * Interface for data operations.
 */
export interface Processor<T> {
  /**
   * Processes the given data.
   * @param data - The data to process.
   * @returns The processed data.
   */
  process(data: T): T;
}
