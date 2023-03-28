const router = require('express').Router();

// GET all galleries for homepage
exports.getHomePage = async (req, res) => {
  try {
    res.render("layouts/main", {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getLoginPage = async (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
};
