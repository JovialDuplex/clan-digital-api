const router = require("express").Router();
const serviceManager = require("../controllers/adminController/servicesManager");
const projectsManager = require("../controllers/adminController/projectsManager");
const serviceValidation = require("../middlewares/validation/servicesValidation")

// --------------- Gestion des Services ------------------
router.post("/add-services", serviceValidation.addServiceValidation, serviceManager.addSerives);
router.put("/update-services", serviceValidation.updateServiceValidation, serviceManager.updateServices);
router.delete("/delete-services", serviceManager.deleteServices);

// --------------- Gestion des Projets -------------------

router.post("/add-projects", projectsManager.addProjects);
router.put("/update-projects", projectsManager.updateProjects);
router.delete("/delete-projects", projectsManager.deleteProjects);

module.exports = router;
