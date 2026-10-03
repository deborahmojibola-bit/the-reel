'use strict';
// .vercelignore must keep internal files off the live site (3 Oct 2026).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const lines = fs.readFileSync(path.join(__dirname, '..', '.vercelignore'), 'utf8')
  .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));

for (const entry of ['.claude/', '.claude-flow/', 'memory/', 'tests/', 'docs/', '.env', '.env.*']) {
  test(`.vercelignore excludes ${entry}`, () => {
    assert.ok(lines.includes(entry), `${entry} missing from .vercelignore`);
  });
}
