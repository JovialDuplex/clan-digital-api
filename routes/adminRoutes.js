const router = require("express").Router();
const serviceManager = require("../controllers/adminController/servicesManager");
const projectsManager = require("../controllers/adminController/projectsManager");
const serviceValidation = require("../middlewares/validation/servicesValidation")
const {login, register} = require("../controllers/userControllers");
const {upload} = require("../config");

// --------------- Gestion des Services ------------------
router.post("/add-services", upload.single("service_image"), serviceValidation.addServiceValidation, serviceManager.addSerives);
router.put("/update-services", upload.single("service_image"), serviceValidation.updateServiceValidation, serviceManager.updateServices);
router.delete("/delete-services", serviceManager.deleteServices);

// --------------- Gestion des Projets -------------------

router.post("/add-projects", projectsManager.addProjects);
router.put("/update-projects", projectsManager.updateProjects);
router.delete("/delete-projects", projectsManager.deleteProjects);

// ----------------- Authentification de l'admin --------
router.post("/login", login);
router.post("/register", register);

module.exports = router;
