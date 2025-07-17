# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Privacy Fork Notice

**This repository is a privacy-focused fork of [DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP).**

Repo link: https://github.com/delano/DesktopCommanderMCP-with-privacy

### Why This Fork Exists

The original project introduced privacy-concerning features that violated user trust:
- Invasive feedback prompts injected into Claude conversations without consent
- Opt-out telemetry and extensive Google Analytics tracking
- Context pollution of user conversations
- Collection of system information, command arguments, and error details

This fork addresses these concerns by:
- **Removing telemetry and external integrations**
- **Removing invasive feedback prompt injection**
- **Maintaining only local usage statistics for tool functionality**
- **Ensuring user control over their data and conversations**

See `PRIVACY_CONVERSATION_HISTORY.md` for detailed community feedback that led to this fork.

### Ongoing Privacy Commitment

All future updates will maintain this privacy-first approach:
- No external telemetry or analytics will be added
- No data collection beyond local tool functionality
- No integration with external services for tracking
- User consent and control remain paramount

---

## Project Functionality

### Common Development Commands

**Build and Development**
- `npm run build` - Build TypeScript to JavaScript in dist/ directory
- `npm run watch` - Watch for TypeScript changes and rebuild automatically
- `npm run clean` - Remove built files in dist/

**Testing**
- `npm test` - Run all tests using the comprehensive test runner
- `npm run test:debug` - Run tests with Node.js debugger attached

**Setup and Installation**
- `npm run setup` - Build and configure Claude Desktop integration
- `npm run setup:debug` - Setup with Node.js inspector for debugging

**Debugging and Analysis**
- `npm run start:debug` - Start server with Node.js inspector on port 9229
- `npm run logs:view` - View fuzzy search logs (local only)
- `npm run logs:analyze` - Analyze fuzzy search patterns and performance

### Architecture Overview

**MCP Server Framework**
- `src/server.ts` - Main MCP server with tool definitions and request handlers
- `src/index.ts` - Entry point with transport setup and error handling
- `src/custom-stdio.ts` - Custom stdio transport for JSON message filtering

**Process Management**
- `src/terminal-manager.ts` - Terminal session management with smart state detection
- `src/command-manager.ts` - Command execution and process lifecycle
- `src/tools/improved-process-tools.ts` - Enhanced process tools with REPL support

**File System Operations**
- `src/handlers/filesystem-handlers.ts` - File system tool handlers
- `src/tools/filesystem.ts` - File system tool implementations

**Text Editing and Search**
- `src/tools/edit.ts` - Block-based text editing with fuzzy search fallback
- `src/tools/search.ts` - File and code search implementations
- `src/tools/fuzzySearch.ts` - Fuzzy matching for edit operations

**Configuration System**
- `src/config-manager.ts` - Configuration loading and persistence
- `src/tools/config.ts` - Configuration tool handlers

### Key Design Patterns

**Tool Handler Architecture**
- All tools defined in `src/server.ts` with Zod schemas
- Handlers organized by category in `src/handlers/`
- Implementation details in `src/tools/`
- Consistent error handling and result formatting

**Smart Process Detection**
- Terminal manager detects REPL prompts and process states
- Early exit on completion prevents unnecessary timeouts
- Support for Python, Node.js, R, shell, and other interactive environments

**Privacy-First Configuration**
- Runtime configuration changes via tools
- Local usage statistics only (no external telemetry)
- User control over directory access and command blocking

### Testing Strategy

The test suite uses a custom runner (`test/run-all-tests.js`) that builds the project and runs all test files with detailed reporting. Tests cover process management, file operations, edit functionality, and configuration management.

### Development Workflow

1. **Make changes** to TypeScript source files
2. **Run tests** with `npm test` to verify functionality
3. **Build** with `npm run build` to compile TypeScript
4. **Test integration** with `npm run setup` to configure Claude Desktop

### Important Notes

- This privacy fork removes all telemetry and external integrations
- The server uses ESM modules with Node.js 18+ requirement
- Windows compatibility is handled throughout with path normalization
- Configuration changes should be made in separate chat sessions for security
- Only local usage statistics are kept for tool functionality
- No external data collection or tracking occurs in this fork
