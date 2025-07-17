# Privacy Statement - Desktop Commander MCP (Privacy Fork)

> [!NOTE]
> You're reading this document on a privacy-focused fork of Desktop Commander. It's significantly modified from the [original version](https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/main/PRIVACY.md).

---

## Privacy-First Goals

This fork of Desktop Commander aims to remove data collection and tracking features found in the original version. **This is an ongoing effort** and we encourage community review to ensure we haven't missed anything.

### 🎯 **What We're Working to Remove:**
- Google Analytics telemetry and external data transmission
- External feedback forms and third-party integrations
- Prompt injection into Claude conversations
- Persistent user tracking and identification
- Unnecessary system information collection

### 📍 **Current Status:**
- **Telemetry functions** - Converted to no-op functions (no external requests)
- **Feedback system** - Replaced with local GitHub issue links
- **Prompt injection** - Removed from conversation flow
- **Usage tracking** - Limited to local-only basic functionality

### ⚠️ **Important Notes:**
- **This is a work in progress** - we may have missed some privacy-invasive code
- **Community review encouraged** - please audit and report any concerns
- **Future syncing** - updates from upstream may reintroduce privacy issues
- **No guarantees** - while we aim for privacy-first, mistakes are possible

## What Currently Stays Local

This fork attempts to keep data local:
- Basic usage counts (for tool functionality)
- Configuration settings (user-controlled)
- Error sanitization (file paths removed from logs)

## Reporting Privacy Issues

**Please help us improve!** If you find any privacy issues with this fork, create an issue at [GitHub repository](https://github.com/delano/DesktopCommanderMCP-with-privacy).

For other issues, questions, or feature requests, please use the [original repository](https://github.com/wonderwhy-er/DesktopCommanderMCP).
