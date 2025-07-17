# Desktop Commander MCP (with Privacy fork) - WIP

> [!NOTE]
> You're reading this document on a fork of Desktop Commander. It is in the process of being modified from the [original version](https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/main/README.md).

### Search, update, manage files and run terminal commands with AI

This fork of Desktop Commander aims to remove data collection and tracking features found in the original version. **This is ongoing work** and we encourage community review to ensure privacy goals are met. See our [Privacy Statement](https://github.com/delano/DesktopCommanderMCP-with-privacy/blob/main/PRIVACY.md) for current status.

## Privacy Fork Progress

### ✅ **Currently Removed/Modified:**
* **Google Analytics telemetry** - Converted to no-op functions
* **External feedback forms** - Replaced with GitHub issue links
* **Prompt injection** - Removed from Claude conversation flow
* **Setup and install scripts** - Removed from fork
* **Static assets** - Various promotional materials removed
* **Documentation** - Updated README.md, PRIVACY.md, FAQ.md

### ⚠️ **Work in Progress:**
* **Code review** - Community audit encouraged to find missed privacy issues
* **Testing** - Ensuring all external calls are properly neutralized
* **Documentation** - Ongoing updates to reflect actual implementation
* **Upstream syncing** - Future updates may reintroduce privacy concerns

### 🤝 **Community Help Needed:**
We encourage security-minded developers to:
* Review the codebase for privacy issues we may have missed
* Test the implementation to verify no external data transmission
* Report findings via [GitHub issues](https://github.com/delano/DesktopCommanderMCP-with-privacy/issues)
* Contribute improvements via [pull requests](https://github.com/delano/DesktopCommanderMCP-with-privacy/pulls)


## Ongoing Updates

As a fork, this version of Desktop Commander MCP will be behind the [original repository](https://github.com/wonderwhy-er/DesktopCommanderMCP/). My initial intention was to create a fork so that I could continue using it. I don't have a tonne of time to review changes and keep it up to date, but if there's interest I'll see what I can do. Any help and/or [pull requests](https://github.com/delano/DesktopCommanderMCP-with-privacy/pulls) are welcome.


## Installation and Configuration

This privacy fork uses **manual installation only** to ensure you control when updates are applied.

### Setup

```bash
git clone https://github.com/delano/DesktopCommanderMCP-with-privacy.git
cd DesktopCommanderMCP-with-privacy
pnpm install && pnpm run build
```

### Configuration

All clients use similar MCP server configuration. Add this server definition to your client's config file:

```json
{
  "name": "desktop-commander-privacy",
  "command": "node", 
  "args": ["/absolute/path/to/DesktopCommanderMCP-with-privacy/dist/index.js"]
}
```

**Config file locations:**
- **Claude Desktop**: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
- **Cursor**: Cursor MCP settings
- **VS Code extensions** (Continue, Cline, etc): Extension-specific config files (check docs)

### Manual Updates

```bash
git fetch && git log --oneline HEAD..origin/main  # Review changes first
git pull && pnpm install && pnpm run build       # Apply after review
```

**⚠️ Why Manual Updates Only:**
- **No surprises** - You control when updates happen
- **Review changes** - Check commits before updating
- **Privacy verification** - Ensure new code doesn't reintroduce tracking
- **Stability** - Test updates in your environment first

## Development

After checking out the repo, run:

```bash
pnpm install
pnpm run build
```

To test the privacy fork:
```bash
pnpm test
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-privacy-improvement`)
3. Commit your changes (`git commit -am 'Remove additional tracking feature'`)
4. Push to the branch (`git push origin my-privacy-improvement`)
5. Create a new Pull Request

**Special focus areas for contributions:**
- Security and privacy audits
- Identifying missed telemetry or tracking code
- Testing to verify no external data transmission
- Documentation improvements
- Upstream change reviews for privacy implications

## License

This project is available as open source under the [MIT License](https://opensource.org/licenses/MIT).

## AI Development Assistance

This privacy fork was developed with assistance from AI tools. The following tools provided significant help with code analysis, privacy remediation, and documentation:

- **Claude Sonnet 4** - Privacy code analysis, refactoring, and documentation
- **Claude Code** - Interactive development sessions and security review
- **GitHub Copilot** - Code completion during modifications

The maintainer remains responsible for all privacy decisions and the final code. We believe in being transparent about development tools, especially when working on privacy-focused software where trust is paramount.

## Privacy Statement

See [PRIVACY.md](https://github.com/delano/DesktopCommanderMCP-with-privacy/blob/main/PRIVACY.md)
