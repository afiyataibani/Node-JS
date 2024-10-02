const express = require("express");
const postCtrl = require("../controllers/postControllers");

const router = express.Router();

router.get("/", postCtrl.homePage);
router.get("/about", postCtrl.aboutPage);
router.get("/contact", postCtrl.contactPage);

module.exports = router;
