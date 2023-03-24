const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');


router.post('/', [body('name', 'Enter an valid name').isLength({ min: 3 }),
body('email', 'Enter an valid email').isEmail(),
body('password', 'Enter an valid password').isLength({ min: 5 }),], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user)).catch(err =>{
            console.log(err);
            res.json({message: err.message});
      });

});

module.exports = router;