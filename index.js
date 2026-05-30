#!/usr/bin/env node

import http from 'node:http';
import fs from 'node:fs/promises';

const server = http.createServer(async (req, res) => {
  const parsedURL = new URL(req.url, 'http://localhost:8080');
  try {
    if (parsedURL.pathname === '/') {
      const htmlIndexData = await fs.readFile('./index.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlIndexData);

    } else if (parsedURL.pathname === '/about') {
      const htmlAboutData = await fs.readFile('./about.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlAboutData);
    
    } else if (parsedURL.pathname === '/contact-me') {
      const htmlContactData = await fs.readFile('./contact-me.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlContactData);

    } else {
      const html404Data = await fs.readFile('./404.html', 'utf8');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(html404Data);
    }
  } catch (err) {
    console.error('Server Error:', err);

    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error: A file is missing or corrupted.');
  }
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});