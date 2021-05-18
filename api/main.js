const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("main")
    res.header("Content-Type", "text/plain")
    res.send("payload " + "Hello World");
});

module.exports = router;