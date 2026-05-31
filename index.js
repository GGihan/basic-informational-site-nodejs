#!/usr/bin/env node

import express from "express";
import path from 'node:path';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve('about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.resolve('contact-me.html'));
});

app.get('*path', (req, res) => {
  res.status(404).sendFile(path.resolve('404.html'));
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);

  res.status(500).send('Internal Server Error: A file is missing or corrupted.');
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is running at http://localhost:${PORT}/`);
});