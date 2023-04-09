const jwt = require ("jsonwebtoken");
const User = require("../model/schema");

const Authenticate = async (req, res, next) =>{
    try{
      console.log("Tok en is :- ", req.cookies);
      // const token = req.cookies.jwtoken;
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDIzYzhiYmVlOGRmOTI1YWY0ZjA0MWEiLCJpYXQiOjE2ODA5MzUzNDN9.zgHKCtSCikpTXWKXKmJKvZ8_IPON87uBlVAd1SXTwts";
      // {{"jwtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDIzYzhiYmVlOGRmOTI1YWY0ZjA0MWEiLCJpYXQiOjE2ODEwMjkxNjF9.SkjDMjPRrQ-KNEYWGExjUr426-TBZqzN2jCuo9wRrX8"}}

      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

      const rootUser = await User.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });

      if (!rootUser) {
        throw new Error("User not found");
      }

      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;

      next();
    }
    catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = Authenticate;