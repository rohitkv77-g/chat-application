const express = require('express');
const router = express.Router();
const { findUsers, findUser } = require('./database/userAuth')


router.get('/:val', async (req, res) => {
    console.log(req.params)
    findUsers(req.params.val)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err);
    })
    
});

module.exports = router;