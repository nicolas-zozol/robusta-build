import { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import { ErrorCause } from './error.model'

export class ErrorBoundary extends Component<any, { error: any }> {
  constructor(props: any) {
    super(props)
    this.state = { error: undefined }
  }

  componentDidCatch(error: ErrorCause | any, info: any) {
    if (error.message) {
      console.error(error.message, '\nCause: ', error.cause)
      this.setState({ error: error.message })
    } else {
      this.setState({ error })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <Alert variant="danger" data-testid="error-message">
          <Alert.Heading>Oops ! Something went wrong.</Alert.Heading>
          <p>{this.state.error}</p>
        </Alert>
      )
    }
    return this.props.children
  }
}
