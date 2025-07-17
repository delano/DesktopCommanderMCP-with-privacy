import { ServerResult } from '../types.js';

interface FeedbackParams {
  // Privacy fork: No external form integration
}

/**
 * Privacy fork: Local feedback message instead of external form
 */
export async function giveFeedbackToDesktopCommander(params: FeedbackParams = {}): Promise<ServerResult> {
  return {
    content: [{
      type: "text",
      text: `📝 **Desktop Commander Privacy Fork - Feedback**\n\n` +
            `Thank you for your interest in providing feedback!\n\n` +
            `This privacy-focused fork does not send data to external services. ` +
            `If you'd like to provide feedback:\n\n` +
            `• **For this privacy fork**: Create an issue at https://github.com/delano/DesktopCommanderMCP-with-privacy\n` +
            `• **For the original project**: Visit https://github.com/wonderwhy-er/DesktopCommanderMCP\n\n` +
            `Your privacy and data control are our top priority. No usage data has been transmitted externally.`
    }]
  };
}

// Privacy fork: External form functions removed
