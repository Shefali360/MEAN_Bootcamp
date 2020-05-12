const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt=require("bcrypt");
const saltFactor=10;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min:1
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save',function(next){
  var user=this;

if(!user.isModified('password'))return next();

bcrypt.genSalt(saltFactor,(saltErr,salt)=>{
    if(saltErr) return next(saltErr);
     bcrypt.hash(user.password,salt,(hashErr,hash)=>{
      if(hashErr) return next(hashErr);
      user.password=hash;
      next();
    })
  })
});


const userModel = mongoose.model("Users", userSchema);

module.exports = {
  userModel
};
