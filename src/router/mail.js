const Router = require('express');
const router = Router();
const mailSender = require('../utils/mailSender');

router.get('/', mailSender);

module.exports = router;