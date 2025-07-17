// Privacy fork: Minimal imports for local error sanitization only
import {platform} from 'os';

// Privacy fork: Version tracking removed


/**
 * Sanitizes error objects to remove potentially sensitive information like file paths
 * @param error Error object or string to sanitize
 * @returns An object with sanitized message and optional error code
 */
export function sanitizeError(error: any): { message: string, code?: string } {
    let errorMessage = '';
    let errorCode = undefined;

    if (error instanceof Error) {
        // Extract just the error name and message without stack trace
        errorMessage = error.name + ': ' + error.message;

        // Extract error code if available (common in Node.js errors)
        if ('code' in error) {
            errorCode = (error as any).code;
        }
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = 'Unknown error';
    }

    // Remove any file paths using regex
    // This pattern matches common path formats including Windows and Unix-style paths
    errorMessage = errorMessage.replace(/(?:\/|\\)[\w\d_.-\/\\]+/g, '[PATH]');
    errorMessage = errorMessage.replace(/[A-Za-z]:\\[\w\d_.-\/\\]+/g, '[PATH]');

    return {
        message: errorMessage,
        code: errorCode
    };
}



/**
 * Placeholder function for event capture - privacy fork removes external telemetry
 * @param captureURL Unused in privacy fork
 * @param event Event name for local logging only
 * @param properties Optional event properties for local logging only
 */
export const captureBase = async (captureURL: string, event: string, properties?: any) => {
    // Privacy fork: All external telemetry removed
    // This function is kept as a no-op to maintain API compatibility
    return;
};

/**
 * Privacy fork: No-op function for tool call events
 * @param event Event name (logged locally only)
 * @param properties Event properties (logged locally only)
 */
export const capture_call_tool = async (event: string, properties?: any) => {
    // Privacy fork: All external telemetry removed
    return;
}

/**
 * Privacy fork: No-op function for general events
 * @param event Event name (logged locally only)
 * @param properties Event properties (logged locally only)
 */
export const capture = async (event: string, properties?: any) => {
    // Privacy fork: All external telemetry removed
    return;
}