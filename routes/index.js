var router = require('express').Router();
var userRouter = require('./api/users');
var articleRouter = require('./api/users');

router.use('/',articleRouter);
router.use('/',userRouter);

module.exports = router;