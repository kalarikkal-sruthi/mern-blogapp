const express = require("express");
const router = express.Router();
const User = require("../Models/UserSchema");

router.get("/test", async (req, res) => {
  res.json("auth api is working ");
});

router.post("/register", async (req, res) => {
  try { 
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.json(409).json({ message: "email already exists" });
    }

    const newUser = new User({
      name,
      password,
      email,
    });
    new newUser.save();
    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 
module.exports = router;
