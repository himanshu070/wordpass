const express = require("express");
const jwt = require("jsonwebtoken");
// const { findOne } = require("../model/schema");
const bcrypt = require("bcrypt");
const router = express();
const validator = require("email-validator");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/schema");

router.get("/", authenticate, (req, res) => {
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
      status: 422,
      error: "Please fill all the fields",
    });
  }
  const validEmail = validator.validate(email);
  if (!validEmail)
    return res.status(422).json({ status: 422, error: "Invalid Email Id" });
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
      res
        .status(401)
        .json({ status: 401, error: "Please enter all the fields" });
    }

    // The first email is the email in the DB and the second is entered by the user. If the email is found in the DB then match it's password
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      console.log("user login nhi chala")
      return res
        .status(401)
        .json({ status: 401, error: "Invalid credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (isMatch) {
        token = await userLogin.generateAuthToken();
        console.log("tOKEN IS:- ", token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2592000000),
          httpOnly: true,
        });
        res
          .status(200)
          .json({ status: 200, message: "Login successful", data: userLogin });
      } else {
        res.status(401).json({ status: 401, error: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    console.error("error is");
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send("hello from the server about");
});

//get user data for contact us and home page
router.get("/getdata", (req, res)=>{
  console.log("Get data route");
  res.send(req.rootUser);
})

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

//contact us page
router.post("/contact",authenticate, async(req, res)=>{
  try {
   
    const {name, email, phone, message} = req.body;

    if(!name || !email || !phone || !message){
      console.log("All fields in contact form not filled");
      return res.json({error: "Please fill all the fields"})
    }

    const userContact = await User.findOne({ _id: req.userID });

    if(userContact){
      const userMessage = await userContact.addMessage(name, email, phone, message);
      await userContact.save();
      res.status(201).json({message: "User contact saved successfully"})
    }

  } catch (error) {
    console.log(error)
  }
})

//add secret password page
router.post("/secret", authenticate, async (req, res) => {
  try {
    const { website, secretpassword } = req.body;

    if (!website, !secretpassword) {
      console.log("All fields save password form not filled");
      return res.json({ error: "Please fill all the fields" });
    }

    const userSecret = await User.findOne({ _id: req.userID });

    if (userSecret) {
      const userMessage = await userSecret.addSecret(
        website, secretpassword
      );
       await userSecret.save();
       res.status(201).json({ message: "User secret password saved successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
