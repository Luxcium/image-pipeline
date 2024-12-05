# Source Directory

This directory contains the TypeScript implementation of the image processing pipeline's frontend components and integration layers.

## Documentation Navigation

- [↑ Project Root](../README.md): Main project documentation
- [→ Library](../library/README.md): Python implementation
- [→ Scripts](../scripts/README.md): Environment management

## Directory Structure

📁 src

### Core Components

- **dateFormatter.ts**

  - Date formatting utilities
  - Timestamp management
  - Time zone handling

- **nodeBridge.ts**

  - Python-TypeScript integration
  - Cross-language communication
  - Data transformation handlers

- **progressTracker.ts**

  - Progress monitoring
  - Status tracking
  - Event management

- **stateVerifier.ts**
  - State validation
  - Integrity checks
  - Error handling

### Data Processing Framework

- **containers/Container.ts**

  - Data encapsulation interfaces and classes

- **containers/DataContainer.ts**

  - Concrete implementation of the Container interface

- **processors/Processor.ts**

  - Modular units for processing operations

- **processors/fetchData.ts**

  - Processor for fetching data

- **processors/processData.ts**

  - Processor for processing data

- **processors/saveData.ts**

  - Processor for saving data

- **pipeline/Pipeline.ts**

  - Manages the flow of data and processors
  - Handles asynchronous operations

## Integration Layer

The TypeScript implementation serves as the frontend layer, integrating with the [Python library](../library/README.md) through defined interfaces. Key integration points include:

- Data transformation pipelines
- Image processing workflows
- Status monitoring and reporting
- Error handling and recovery

## Development Setup

1. Environment Setup

   ```bash
   # Use the environment setup script
   ../scripts/create_environment.sh
   ```

2. Install Dependencies

   ```bash
   pnpm install
   ```

3. Build Project

   ```bash
   pnpm build
   ```

## Testing

The TypeScript implementation includes:

- Unit tests for components
- Integration tests with Python layer
- End-to-end workflow tests

Run tests using:

```bash
pnpm test
```

## Additional Resources

- See [Project README](../README.md) for overall project structure
- Check [Library README](../library/README.md) for Python implementation
- Review [Scripts README](../scripts/README.md) for environment management
- See [AI Agent Guidance](AI_agent_guidance.md) for development guidelines

## Development Guidelines

1. Follow TypeScript best practices
2. Maintain strict type checking
3. Document all public interfaces
4. Include comprehensive tests
5. Keep integration points clean and well-documented

## Containers

### Container Interface

The `Container` interface is defined in `src/containers/Container.ts` and is used to encapsulate data with optional metadata properties.

```typescript
// src/containers/Container.ts
export interface Container<T> {
  data: T;
  id?: string;
  timestamp?: Date;
}
```

### DataContainer Class

The `DataContainer` class is a concrete implementation of the `Container` interface, ensuring immutability by making properties read-only.

```typescript
// src/containers/DataContainer.ts
import { Container } from './Container';

export class DataContainer<T> implements Container<T> {
  constructor(public readonly data: T, public readonly id?: string, public readonly timestamp?: Date) {}
}
```

## Processors

### Processor Type

The `Processor` type is defined in `src/processors/Processor.ts` and represents a function that takes a `Container<T>` and returns a `Promise<Container<U>>`.

```typescript
// src/processors/Processor.ts
import { Container } from '../containers/Container';

export type Processor<T, U> = (container: Container<T>) => Promise<Container<U>>;
```

### Fetch Data Processor

The `fetchData` processor fetches data from a URL and returns a `DataContainer` with the fetched data.

```typescript
// src/processors/fetchData.ts
import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const fetchData: Processor<string, any> = async (container) => {
  const response = await fetch(container.data);
  const data = await response.json();
  return new DataContainer(data);
};
```

### Process Data Processor

The `processData` processor processes the data and returns a `DataContainer` with the processed data.

```typescript
// src/processors/processData.ts
import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const processData: Processor<any, any> = async (container) => {
  const processedData = { ...container.data, processed: true };
  return new DataContainer(processedData);
};
```

### Save Data Processor

The `saveData` processor saves the data and returns a `DataContainer` with `undefined` data.

```typescript
// src/processors/saveData.ts
import { Processor } from './Processor';
import { DataContainer } from '../containers/DataContainer';

export const saveData: Processor<any, void> = async (container) => {
  console.log('Data saved:', container.data);
  return new DataContainer(undefined);
};
```

## Pipeline

### Pipeline Class

The `Pipeline` class manages the flow of containers through processors sequentially and in parallel.

```typescript
// src/pipeline/Pipeline.ts
import { Processor } from '../processors/Processor';
import { Container } from '../containers/Container';

export class Pipeline<TInput, TOutput> {
  private processors: Processor<any, any>[] = [];

  addProcessor<T, U>(processor: Processor<T, U>): Pipeline<TInput, U> {
    this.processors.push(processor);
    return this as unknown as Pipeline<TInput, U>;
  }

  async executeSequentially(initialContainer: Container<TInput>): Promise<Container<TOutput>> {
    let currentContainer: Container<any> = initialContainer;
    for (const processor of this.processors) {
      currentContainer = await processor(currentContainer);
    }
    return currentContainer as Container<TOutput>;
  }

  async executeInParallel(initialContainer: Container<TInput>): Promise<Container<TOutput>> {
    const promises = this.processors.map((processor) => processor(initialContainer));
    const results = await Promise.all(promises);
    return results[results.length - 1] as Container<TOutput>;
  }
}
```

### Usage Example

Here is an example of how to use the `Pipeline` class with the defined processors.

```typescript
import { Pipeline } from './pipeline/Pipeline';
import { fetchData } from './processors/fetchData';
import { processData } from './processors/processData';
import { saveData } from './processors/saveData';
import { DataContainer } from './containers/DataContainer';

const pipeline = new Pipeline<string, void>()
  .addProcessor(fetchData)
  .addProcessor(processData)
  .addProcessor(saveData);

const initialContainer = new DataContainer('https://api.example.com/data');

pipeline.executeSequentially(initialContainer).then((result) => {
  console.log('Sequential execution result:', result);
});

pipeline.executeInParallel(initialContainer).then((result) => {
  console.log('Parallel execution result:', result);
});
```
