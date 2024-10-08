import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    facebookId:{
     type:String
    },
    googleId:{
  type:String
    },
    name:{
        required:true,
        type:String,
    },
    email:{
        required: function() {
            return !this.facebookId && !this.googleId;
          },
        type:String,
        unique:true,
    },
    password:{
        required:function(){
            return !this.facebookId && !this.googleId
        },
        type:String,
    },
    tokens:[String]
});

const User = mongoose.model("User", userSchema);

export default User;