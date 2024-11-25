const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/userController");

router.get("/show", (req, res) => {
  res.send("salut project-crud");
});

router.get("/add/:username/:email/:cin", (req, res) => {
  new User({
    username: req.params.username,
    email: req.params.email,
    cin: req.params.cin,
  }).save();
  res.send("good added");
});

router.post("/add", usercontroller.add);

router.get("/showusers", usercontroller.showusers);

router.get("/showbyid/:id", usercontroller.showbyid);

router.get("/showbyusername/:username", usercontroller.showuserbyname);

router.get("/showbyusersname/:username",usercontroller.showusersbyname);

router.put("/update/:id", usercontroller.updateuser);

router.delete("/delete/:id", usercontroller.deleteuser);
module.exports = router;
