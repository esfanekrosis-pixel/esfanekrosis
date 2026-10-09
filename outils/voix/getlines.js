// Lists every piece of speech the game can say, by running lines.js inside the game page.
// Usage: node outils/voix/getlines.js  (needs Playwright) -> outils/voix/lines.json
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const root = path.join(__dirname, '..', '..'), html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const page = html.replace(/^\}\)\(\);$/m, fs.readFileSync(path.join(__dirname, 'lines.js'), 'utf8') + '\n})();');
  const tmp = path.join(root, '.lines.html'); fs.writeFileSync(tmp, page);
  const b = await chromium.launch(), pg = await b.newPage();
  await pg.goto('file://' + tmp); await pg.waitForTimeout(300);
  fs.writeFileSync(path.join(__dirname, 'lines.json'), JSON.stringify(await pg.evaluate(() => window.__lines())));
  await b.close(); fs.unlinkSync(tmp);
})();
