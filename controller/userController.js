const User = require("../models/user");

async function add (req, res)  {
    try {
      //console.log("body" + req.body);
      const user = new User(req.body);
      await user.save();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function showusers (req, res) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function showbyid (req, res)  {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }
  async function showuserbyname(req, res)  {
    try {
      //const { username } = req.params.username;
      const user = await User.findOne({ username: req.params.username });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }


  async function showusersbyname (req, res) {
    try {
      //const { username } = req.params.username;
      const user = await User.find({ username: req.params.username });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateuser (req, res)  {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteuser(req, res)  {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send(" deleted");
    } catch (err) {
      console.log(err);
    }
  }
  module.exports={add,showusers,showbyid,showuserbyname,showusersbyname,updateuser,deleteuser}