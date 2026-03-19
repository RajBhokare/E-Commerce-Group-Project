import { Router } from 'express';

const router = Router();

function requireAuth(req, res, next) {
  if (!req.session.user) return res.redirect('/');
  next();
}

function getDashboardData() {
  const totalTransactions = 48320;
  const fraudDetected = 1247;
  const riskScore = Math.floor(Math.random() * 30) + 55; // 55–85 range

  const fraudTrend = [42, 67, 55, 89, 73, 91, 78, 104, 88, 112, 95, 124];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const safeCount = totalTransactions - fraudDetected;

  const recentAlerts = [
    { id: '#TX-9921', type: 'Card Fraud',       amount: '$4,200', risk: 'Critical', time: '2 min ago' },
    { id: '#TX-9887', type: 'Account Takeover', amount: '$870',   risk: 'High',     time: '11 min ago' },
    { id: '#TX-9834', type: 'Bot Activity',     amount: '$320',   risk: 'Medium',   time: '28 min ago' },
    { id: '#TX-9801', type: 'Chargeback Risk',  amount: '$1,560', risk: 'High',     time: '45 min ago' },
    { id: '#TX-9779', type: 'Velocity Check',   amount: '$95',    risk: 'Low',      time: '1 hr ago' },
  ];

  return {
    totalTransactions: totalTransactions.toLocaleString(),
    fraudDetected: fraudDetected.toLocaleString(),
    riskScore,
    fraudTrend,
    months,
    safeCount,
    fraudCount: fraudDetected,
    recentAlerts,
  };
}

router.get('/', requireAuth, (req, res) => {
  const data = getDashboardData();
  res.render('dashboard', { user: req.session.user, ...data });
});

export default router;
