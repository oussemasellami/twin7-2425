const express = require("express");
const router = express.Router();
const partiecontroller = require("../controller/PartieController");

router.post("/newjoueur", partiecontroller.addjoueur);
router.get("/getalljoueur", partiecontroller.showjoueur);
router.get("/getjoueur/:id", partiecontroller.showbyid);
router.delete("/deletejoueur/:id", partiecontroller.deletejoueur);
router.put("/attaque/:id1/:id2", partiecontroller.attaque);
router.post("/newpartie/:id1/:id2", partiecontroller.addpartie);
router.get("/partie", (req,res)=>{
    res.render("partie")
    });

module.exports = router;
