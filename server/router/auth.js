const express = require("express");
const jwt = require("jsonwebtoken");
const { findOne } = require("../model/schema");
const bcrypt = require("bcrypt");
const router = express();
const validator = require("email-validator");
const authenticate = require("../middleware/authenticate")


require("../db/conn");
const User = require("../model/schema");

router.get("/", (req, res) => {
  res.send("hogya bhai hogya");
});

// USING PROMISES (using .then and .catch)
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

// USING ASYNC AWAIT for user registration
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  // if user does not fill all the fields
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({
      status:422,
      error: "Please fill all the fields",
    });
  }
  const validEmail = validator.validate(email);
  if(!validEmail) return res.status(422).json({ status: 422, error: "Invalid Email Id" });
  if (password != cpassword)
    return res
      .status(422)
      .json({ status: 422, error: "Confirm Password does not match Password" });

  try {
    // if user is already registered
    const userExist = await User.findOne({
      email: email,
    });
    if (userExist) {
      return res.status(422).json({
        status: 422,
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
      status: 201,
      message: "User successfully registered",
    });
  } catch (error) {
    console.log(error);
  }
});



// LOGIN MODEL
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({ status:401, error: "Please enter all the fields" });
    } 

    // The first email is the email in the DB and the second is entered by the user. If the email is found in the DB then match it's password
    const userLogin = await User.findOne({ email: email });
    if (!userLogin)
      return res
        .status(401)
        .json({ status: 401, error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, userLogin.password);
    token = await userLogin.generateAuthToken();
    console.log("tOKEN IS:- ",token)

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 2592000000),
      httpOnly: true
    });
    
    if (isMatch) {
      res.status(200).json({ status: 200, message: "Login successful" });
    } else {
      res.status(401).json({ status: 401, error: "Invalid credentials" });
    }
  } catch (error) {
    
    console.log(error);
    console.error("error is");
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send("hello from the server about");
});

//Contact Feedback
// router.post("/contact", async (req, res)=>{
//   try {
//     const {feedback} = req.body;

//     const user = new User({
      
//     })
//   } catch (error) {
//     console.log(error)
//   }
// })
module.exports = router;
