const express = require('express');
const router = express.Router();

router.get('/:val', (req, res) => {
  console.log(req.params)
    console.log("searchuser + "+req.params.val)
    res.json({user:"successful"})
});

module.exports = router;