const router = require("express").Router();

const HomepageController = require("../controller/homepage");

const { allProjects } = HomepageController();
router.get("/allProjects", allProjects);

module.exports = router;
