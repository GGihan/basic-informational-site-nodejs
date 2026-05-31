import { Router } from 'express';
import path from 'node:path';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

indexRouter.get('/about', (req, res) => {
  res.sendFile(path.resolve('about.html'));
});

indexRouter.get('/contact', (req, res) => {
  res.sendFile(path.resolve('contact.html'));
});

indexRouter.post('/contact', (req, res) => {
  res.send('This is sending via POST contact');
});

export default indexRouter;