const express = require('express');
const router = express.Router();
const {insertUser} = require('../database/userAuth');

router.post('/', async (req, res) => {
    const user = req.body;
    console.log(user);
    let result = await insertUser(user);
    console.log(result);

    if(result.exist){
        console.log("this user already exist in the database");
        res.send({...result, inserted: false});
    }else{
        console.log("user inserted in database");
        res.send({exist: false, inserted: true})
    }
});


module.exports = router;