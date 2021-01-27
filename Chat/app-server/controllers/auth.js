module.exports.relocateToAuth = (req, res) => {
  res.redirect('/login')
};

module.exports.login = (req, res) => {
  res.render('auth',{});
};