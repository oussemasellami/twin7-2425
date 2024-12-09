const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/ProductController");
const validate = require("../midddl/validate");

router.post("/addproduct", validate.validateproduct, usercontroller.add);

router.get("/showproducts", usercontroller.showusers);

router.get("/showbyid/:id", usercontroller.showbyid);

router.get("/showbyproductname/:username", usercontroller.showuserbyname);

router.get("/showbyproductsname/:username", usercontroller.showusersbyname);

router.put("/update/:id", usercontroller.updateuser);

router.delete("/delete/:id", usercontroller.deleteuser);
module.exports = router;
