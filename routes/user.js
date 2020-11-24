const express = require("express");

const router = express.Router();

const { user: controller } = require("../controllers");

router.get("/test", controller.test);

module.exports = router;
