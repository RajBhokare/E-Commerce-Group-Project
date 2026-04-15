export const showLogin = (req, res) => {
  // If already logged in, redirect to dashboard
  if (req.session.user) {
    return res.redirect('/dashboard');
  }
  res.render('index', { error: null });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Hardcoded admin credentials
  if (email === 'admin@riskmonitor.io' && password === 'secure123') {
    req.session.user = {
      email: email,
      name: 'Admin User'
    };
    return res.redirect('/dashboard');
  }

  // Invalid login
  res.render('index', { 
    error: 'Invalid email or password. Please try again.' 
  });
};

export const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error(err);
    res.redirect('/login');
  });
};