const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    a={
        "name":"Rahul",
        "age":21
    }
    res.json(a)
})

module.exports = router;