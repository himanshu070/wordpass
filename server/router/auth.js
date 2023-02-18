const express = require("express");
const { findOne } = require("../model/schema");
const bcrypt = require("bcrypt");
const router = express();
require("../db/conn");
const User = require("../model/schema");

router.get("/", (req, res) => {
  res.send("hogya bhai hogya");
});

// USING PROMISES (.then .catch)
// router.post("/register", (req, res) => {
//   const {
//     name,
//     email,
//     phone,
//     password,
//     cpassword
//   } = req.body;

//   // if user does not fill all the fields
//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({
//       error: "Please fill all the fields"
//     });
//   }

//   // if user is already registered
//   User.findOne({
//     email: email
//   }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({
//         error: "This email already exists"
//       });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//       cpassword
//     });

//     user.save().then(()=>{
//       res.status(201).json({message: "User successfully registered"});
//     }).catch(err => {console.log(err)});
//   }).catch(err => {console.log(err)});

// });

// USING ASYNC AWAIT
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  // if user does not fill all the fields
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({
      error: "Please fill all the fields",
    });
  }
  if (password != cpassword)
    return res
      .status(422)
      .json({ error: "Confirm Password does not match Password" });

  try {
    // if user is already registered
    const userExist = await User.findOne({
      email: email,
    });
    if (userExist) {
      return res.status(422).json({
        error: "This email already exists",
      });
    }

    const user = new User({
      name,
      email,
      phone,
      password,
      cpassword,
    });

    // before saving we are running a middleware in schema.js to hash the password
    await user.save();

    res.status(201).json({
      message: "User successfully registered",
    });
  } catch (error) {
    console.log(error);
  }
});

// LOGIN MODEL
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Please enter all the fields" });
    }

    // The first email is the email in the DB and the second is entered by the user. If the email is found in the DB then match it's password
    const userLogin = await User.findOne({ email: email });
    if (!userLogin)
      return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (isMatch) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
