var  express = require('express');
var router = express.Router();
var user = require('./user'); 

router.get('/', user.getIndex);
router.get('/registerUsers', user.getRegister);
router.post('/registerUsers', user.registerUsers);
router.post('/loginUsers', user.loginUsers);

module.exports = router; 