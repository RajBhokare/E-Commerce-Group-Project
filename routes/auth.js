import { Router } from 'express';

const router = Router();

const CREDENTIALS = {
  email: 'admin@riskmonitor.io',
  password: 'secure123'
};

router.get('/', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('index', { error: null });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
    req.session.user = { email, name: 'Admin' };
    return res.redirect('/dashboard');
  }

  res.render('index', { error: 'Invalid credentials. Please try again.' });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

export default router;
