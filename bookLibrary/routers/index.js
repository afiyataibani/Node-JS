const express = require('express');
const bookCtrl = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookCtrl.homePage);
router.get('/about', bookCtrl.aboutPage);
router.get('/delete/:id', bookCtrl.deleteBookData);
router.get('/edit/:id', bookCtrl.editPage);
router.post('/update/:id', bookCtrl.updateBookData);

// Book API

router.get('/getData', bookCtrl.getBookData);
router.post('/create', bookCtrl.createData);
// router.patch('/update', bookCtrl.updateBookData);
// router.delete('/delete', bookCtrl.deleteBookData);

module.exports = router;