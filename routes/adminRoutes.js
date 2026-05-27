const router = require("express").Router();
const serviceManager = require("../controllers/adminController/servicesManager");
const projectsManager = require("../controllers/adminController/projectsManager");
const validationServices = require("../middlewares/validation/servicesValidation")

// --------------- Gestion des Services ------------------
router.post("/add-services", validationServices.addServiceValidation, serviceManager.addSerives);
router.put("/update-services", serviceManager.updateServices);
router.delete("/delete-services", serviceManager.deleteServices);

// --------------- Gestion des Projets -------------------

router.post("/add-projects", projectsManager.addProjects);
router.put("/update-projects", projectsManager.updateProjects);
router.delete("/delete-projects", projectsManager.deleteProjects);

module.exports = router;
