const express = require('express');
const router = express.Router();

//@route    GET api/user
//Desc     Test rout
//@access  public
router.get('/', (req, res) => res.send('posts route'));

module.exports = router;