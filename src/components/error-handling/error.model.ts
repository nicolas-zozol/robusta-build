import {useState} from "react"

export interface BackendError {
    message: string
    status: number
    value?: any
    type: string
}

interface AxiosError {
    cause?: string;
    response: {
        data: any;
    }
    message?: string;
}

export interface ErrorCause {
    message: string
    cause: string | BackendError
}

export function useError(): [ErrorCause | undefined, (message: string, error: AxiosError) => void] {
    const [error, setError] = useState<ErrorCause>()

    if (error) {
        // tslint:disable-next-line
        console.error(
            error.message,
            `\nCause: ${
                typeof error.cause === "string" ? error.cause : (error.cause as BackendError).message
            }`
        )
    }

    const enhancedSetError = (message: string, axiosError: AxiosError): void => {
        setError(formatError(message, axiosError))
    }

    return [error, enhancedSetError]
}

function formatError(message: string, error: AxiosError): ErrorCause {
    if (error.response && error.response.data) {
        return {message, cause: error.response.data}
    }
    if (error.message) {
        return {message, cause: error.message}
    }
    return {message: "Unexpected error", cause: error.toString()}
}
