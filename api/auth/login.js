const express = require('express');
const router = express.Router();
const {loginUser} = require("../database/userAuth");

router.post('/', async (req, res) => {
    console.log(req.body);
    try{
        const data = await loginUser(req.body);
        console.log("logged in user - ", data.userName);
        res.send({loggedIn: true});
    }catch(err){
        if(!err.exist){
            console.log(err)
            res.send({...err, loggedIn: false});
        }
    }
})

module.exports = router;