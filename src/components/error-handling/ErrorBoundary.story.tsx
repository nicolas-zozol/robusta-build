import { useEffect, useState } from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { Story } from '../catalog/ComponentCatalog.model'

const FailureComponent = () => {
  throw Error('failure')
}

const DataFetchingComponent = () => {
  const [error, setError] = useState<string>()

  useEffect(() => {
    fetch('http://localhost:3821347/dsfsdfhsdf/')
      .then(() => {
        // do whatever you want
      })
      // 1) catch the error asynchronously => keep it in the local state to provoke a new render
      .catch(setError)
  }, [])

  // 2) throw error during the render phase
  if (error) {
    throw error.toString()
  }

  return <div>Hello world!</div>
}

export const stories: Story[] = [
  {
    title: 'default',
    documentation:
      'ErrorBoundary component handles SYNCHRONOUS errors that may happen while rendering a component',
    content: (
      <ErrorBoundary>
        <FailureComponent />
      </ErrorBoundary>
    ),
  },
  // example with a data fetching in error
  {
    title: 'component fetching data',
    documentation:
      'This example should be considered when implementing a component which fetches data asynchronously',
    content: (
      <ErrorBoundary>
        <DataFetchingComponent />
      </ErrorBoundary>
    ),
  },
]
