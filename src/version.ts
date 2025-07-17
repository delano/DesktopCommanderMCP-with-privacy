// Using assert syntax for Node.js 18+ compatibility (TypeScript prefers 'with' but runtime needs 'assert' for Node 18)
// @ts-ignore: TS2880 - assert syntax needed for Node.js 18+ compatibility
import packageJson from "../package.json" assert { type: "json" };

export const VERSION = packageJson.version;
