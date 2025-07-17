# Development Scripts

These scripts were included in the original DesktopCommanderMCP repository and help analyze local fuzzy search logs created during edit operations. Based on our review, they appear to work only with local data without external transmission, but we encourage you to examine the code yourself. The logs seem to contain edit operation metadata rather than file contents or paths, though you should verify what data is actually captured.

## Fuzzy Search Logs

The fuzzy search logger stores performance data in `~/.claude-server-commander-logs/fuzzy-search.log` including search patterns, similarity scores, and execution times.

### Available Scripts

- `analyze-fuzzy-logs.js` - Analyze edit performance patterns
- `view-fuzzy-logs.js` - Show recent operations in readable format
- `clear-fuzzy-logs.js` - Clear logs for fresh testing
- `sync-version.js` - Synchronize versions between `package.json` and `src/version.ts`

Run any script with `--help` to see available options.
