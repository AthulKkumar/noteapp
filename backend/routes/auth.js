const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');


router.post('/createuser', [body('name', 'Enter an valid name').isLength({ min: 3 }),
body('email', 'Enter an valid email').isEmail(),
body('password', 'Enter an valid password').isLength({ min: 5 }),], async (req, res) => {
  // If there are errors, return Bad request and the errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    // Check whether the email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send('Sorry that user already exists');
    }
    else {
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
    }
    res.json(user);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }

});

module.exports = router;