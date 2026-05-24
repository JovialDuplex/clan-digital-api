const router = require("express").Router();
const {
        addSerives, addProjects, 
        deleteProjects, deleteServices,
        updateProjects, updateServices
    } = require("../controllers/adminControllers");


// --------------- Gestion des Services ------------------
router.post("/add-services", addSerives);
router.put("/update-services", updateServices);
router.delete("/delete-services", deleteServices);

// --------------- Gestion des Projets -------------------
router.post("/add-projects", addProjects);
router.put("/update-projects", updateProjects);
router.delete("/delete-projects", deleteProjects);

module.exports = router;
