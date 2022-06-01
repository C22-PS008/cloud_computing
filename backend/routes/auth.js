const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const verifyToken = require("./verifyToken");
require("dotenv").config();

//POST REGISTER
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if user already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");
  //Hash password
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const userSaved = await user.save();
    res.status(201).send({
      message: "User created successfully",
      data: {
        user: userSaved,
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if user already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is wrong");

  //Checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Email or password is wrong");

  //Create token
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.TOKEN_SECRET,
    { expiresIn: "2h" }
  );
  user.token = token;
  res
    .header("x-auth-token", token)
    .status(200)
    .send({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        email: user.email,
      },
      accessToken: token,
    });
});

module.exports = router;
