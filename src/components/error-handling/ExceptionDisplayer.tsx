import { ErrorCause } from './error.model'
import Alert from 'react-bootstrap/Alert'
import { Story } from '../catalog/ComponentCatalog.model'

interface ErrorDetailsProps {
  error: ErrorCause
}

const ErrorDetails = ({ error }: ErrorDetailsProps) => {
  if (typeof error.cause === 'string') {
    return <p>{error.cause}</p>
  }

  console.error('errorDetails', error)

  return error.cause.type === 'VALIDATION_ERROR' &&
    Array.isArray(error.cause.value) ? (
    <div>
      {error.cause.value &&
        error.cause.value.map(e => <div key={e}>{e.message}</div>)}
    </div>
  ) : (
    <div>{error.cause.message}</div>
  )
}

interface ErrorProps {
  error: ErrorCause | undefined
}

export const ExceptionDisplayer = ({ error }: ErrorProps) =>
  error ? (
    <Alert variant="danger" data-testid="error-message">
      <span role="img" aria-label="error">
        ❗️
      </span>
      {error.message}
      <ErrorDetails error={error} />
    </Alert>
  ) : null

export const ExceptionDisplayerStories: Story[] = [
  {
    title: 'default',
    documentation:
      'ErrorBoundary component handles SYNCHRONOUS errors that may happen while rendering a component',
    content: (
      <ExceptionDisplayer
        error={{
          message: 'an error occurred while fetching things',
          cause: {
            message: 'invalid data to submit',
            status: 400,
            type: 'Validation error',
            value: [
              { message: 'Project is still a draft' },
              { message: 'Recipient is required' },
            ],
          },
        }}
      />
    ),
  },
]
