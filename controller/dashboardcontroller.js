export const getDashboard = (req, res) => {
  // Protect route - redirect if not logged in
  if (!req.session.user) {
    return res.redirect('/login');
  }

  // Realistic dummy data (exactly as requested)
  const dashboardData = {
    user: req.session.user,
    totalTransactions: 48291,
    fraudDetected: 1284,
    riskScore: 78,
    detectionRate: 96.4,
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    fraudTrend: [120, 190, 160, 250, 310, 280, 342],
    safeCount: 47007,
    fraudCount: 1284,
    recentAlerts: [
      {
        id: "TXN-987654",
        type: "Unusual Transaction Amount",
        amount: "$2,499.00",
        risk: "High",
        time: "3 mins ago"
      },
      {
        id: "TXN-987653",
        type: "Multiple Failed Logins",
        amount: "$149.99",
        risk: "Medium",
        time: "11 mins ago"
      },
      {
        id: "TXN-987652",
        type: "VPN / Tor Detected",
        amount: "$899.50",
        risk: "High",
        time: "27 mins ago"
      },
      {
        id: "TXN-987651",
        type: "Suspicious Device",
        amount: "$29.99",
        risk: "Low",
        time: "1 hour ago"
      },
      {
        id: "TXN-987650",
        type: "Account Takeover Attempt",
        amount: "$3,750.00",
        risk: "Critical",
        time: "2 hours ago"
      }
    ]
  };

  res.render('dashboard', dashboardData);
};