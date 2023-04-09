const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  secret: [
    {
      website: {
        type: String,
        required: true,
      },
      secretpassword: {
        type: String,
        required: true,
      },
    },
  ],
});

// middleware to hash the password and confirm password.. if password is modified, hash it with 12 character hash.
userSchema.pre('save', async function (next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
})

// we are generating token 
userSchema.methods.generateAuthToken = async function(){
  try {
    let tokenNew = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:tokenNew});
    await this.save();
    return tokenNew;
  } catch (error) {
    console.log(error);
  }
}

//store the message 
userSchema.methods.addMessage = async function (name, email, phone, message){
  try {
    
    this.messages = this.messages.concat({name, email, phone, message})
    await this.save();
    return this.messages;

  } catch (error) {
    console.log(error)
  }
}
//store the secret passwords of user 
userSchema.methods.addSecret = async function (website, secretpassword) {
  try {
    this.secret = this.secret.concat({ website, secretpassword });
    await this.save();
    return this.secret;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model('USER', userSchema);
module.exports = User;