const router = require('express').Router();
const item = require('./controller');

router.post('/items', item.create);
router.get('/items', item.getAll);
router.patch('/item/:id',item.updateById)
router.delete('/item/:id', item.delete);


module.exports = router;