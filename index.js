#!/usr/bin/env node

import express from "express";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viewsDirectory = path.resolve(__dirname, 'views');

app.set('views', viewsDirectory);
app.set('view engine', 'ejs');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.get('*path', (req, res) => {
  res.status(404).sendFile(path.resolve('404.html'));
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);

  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is running at http://localhost:${PORT}/`);
});