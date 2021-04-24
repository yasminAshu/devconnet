const express = require('express');
const router = express.Router();

//@route    GET api/user
//Desc     Test rout
//@access  public
router.get('/', (req, res) => res.send('profice route'));

module.exports = router;