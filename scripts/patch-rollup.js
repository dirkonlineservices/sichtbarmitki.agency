import fs from 'node:fs';
import path from 'node:path';

const nativeJsPath = path.resolve('node_modules/rollup/dist/native.js');
if (fs.existsSync(nativeJsPath)) {
  let content = fs.readFileSync(nativeJsPath, 'utf8');
  if (!content.includes('@rollup/wasm-node/dist/native.js')) {
    content = content.replace(
      /const \{ parse, parseAsync, xxhashBase64Url, xxhashBase36, xxhashBase16 \} = requireWithFriendlyError\([\s\S]*?\);/,
      `let bindings;
try {
	bindings = requireWithFriendlyError(
		existsSync(path.join(__dirname, localName)) ? localName : \`@rollup/rollup-\${packageBase}\`
	);
} catch (nativeErr) {
	try {
		bindings = require('@rollup/wasm-node/dist/native.js');
	} catch {
		throw nativeErr;
	}
}
const { parse, parseAsync, xxhashBase64Url, xxhashBase36, xxhashBase16 } = bindings;`
    );
    fs.writeFileSync(nativeJsPath, content, 'utf8');
  }
}
