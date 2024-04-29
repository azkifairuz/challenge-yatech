const router = require("express").Router();
const patien = require("../controllers/patienController.js");
router.post("/registration-patien", patien.registrationPatien);

module.exports = router;