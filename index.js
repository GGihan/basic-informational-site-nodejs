#!/usr/bin/env node

import http from 'node:http';
import fs from 'node:fs/promises';

const server = http.createServer(async (req, res) => {
  const parsedURL = new URL(req.url, 'http://localhost:8080');
  
  if (parsedURL.pathname === '/') {
    try {
      const htmlIndexData = await fs.readFile('./index.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlIndexData);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error: Missing index.html');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});