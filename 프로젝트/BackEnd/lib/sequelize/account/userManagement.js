const checkUser = (req, res) => {
  const { user } = req.body;

  console.log(user);

  res.json(user);
};

const logoutUser = (req, res) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.status(204).end();
};

module.exports = {
  checkUser,
  logoutUser,
};
