/**
 * Class for managing the flow of data and processors.
 */
export class Pipeline<T> {
  private processors: Array<Processor<T>> = [];

  /**
   * Adds a processor to the pipeline.
   * @param processor - The processor to add.
   */
  addProcessor(processor: Processor<T>): void {
    this.processors.push(processor);
  }

  /**
   * Processes the given data through the pipeline.
   * @param data - The data to process.
   * @returns The processed data.
   */
  async processData(data: T): Promise<T> {
    let processedData = data;
    for (const processor of this.processors) {
      processedData = await processor.process(processedData);
    }
    return processedData;
  }

  /**
   * Handles errors that occur during processing.
   * @param error - The error to handle.
   */
  handleError(error: Error): void {
    console.error('Error occurred during processing:', error);
  }
}
