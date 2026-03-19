import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';

import authRouter from './routes/auth.js';
import dashboardRouter from './routes/dashboard.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'risk-monitor-secret-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 }
}));

app.use('/', authRouter);
app.use('/dashboard', dashboardRouter);

app.listen(PORT, () => {
  console.log(`Risk Monitor running → http://localhost:${PORT}`);
});
