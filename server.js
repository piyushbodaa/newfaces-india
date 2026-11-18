const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Only these checked-in assets belong to the public site.
const assets = new Map([
  ['/index.html', 'text/html; charset=utf-8'],
  ['/styles.css', 'text/css; charset=utf-8'],
  ['/app.js', 'text/javascript; charset=utf-8'],
]);

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(req.url.split('?')[0]);
  } catch {
    res.writeHead(400).end('Bad request');
    return;
  }

  if (!pathname.startsWith('/') || pathname.includes('\\') || pathname.includes('\0') ||
      pathname.split('/').some(segment => segment.startsWith('.'))) {
    res.writeHead(404).end('Not found');
    return;
  }

  // The client handles extensionless routes. All other unknown assets are missing.
  const asset = assets.has(pathname) ? pathname : '/index.html';
  if (asset !== pathname && path.extname(pathname)) {
    res.writeHead(404).end('Not found');
    return;
  }

  fs.readFile(path.join(__dirname, asset), (err, data) => {
    if (err) {
      res.writeHead(404).end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': assets.get(asset) }).end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`NewFaces India running at http://localhost:${server.address().port}`);
});
