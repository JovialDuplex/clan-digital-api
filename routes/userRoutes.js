const user = require("../controllers/userControllers");

const router = require("express").Router();

router.get("/services", user.getServices);
router.get("/projects", user.getProjects);
router.get("/testimony", user.getTestimony);

module.exports = router;
