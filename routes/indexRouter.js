import { Router } from 'express';
import path from 'node:path';

const indexRouter = Router();

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About'},
];

const users = ["Rose", "Cake", "Biff"];

const socialLinks = [
  { href: 'https://github.com/GGihan', text: 'Github' },
  { href: 'https://www.linkedin.com/', text: 'Linkedin' },
  { href: 'https://x.com/', text: 'Twitter' },
];

indexRouter.use((req, res, next) => {
  res.locals.socialLinks = socialLinks;
  next();
});

indexRouter.get('/', (req, res) => {
  res.render('index', { links: links, users: users });
});

indexRouter.get('/about', (req, res) => {
  res.render('about', { links: links });
});

indexRouter.get('/contact', (req, res) => {
  res.sendFile(path.resolve('contact.html'));
});

indexRouter.post('/contact', (req, res) => {
  res.send('This is sending via POST contact');
});

export default indexRouter;