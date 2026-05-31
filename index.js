#!/usr/bin/env node

import express from "express";
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.get('*path', (req, res) => {
  res.status(404).sendFile(path.resolve('404.html'));
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);

  res.status(500).send('Internal Server Error: A file is missing or corrupted.');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is running at http://localhost:${PORT}/`);
});