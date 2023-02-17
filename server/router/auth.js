const express = require("express");
const { findOne } = require("../model/schema");
const router = express();
require("../db/conn");
const User = require("../model/schema");

router.get("/", (req, res) => {
  res.send(`Hello from the home page`);
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
    await user.save();
    res.status(201).json({
      message: "User successfully registered",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
