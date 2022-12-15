import mongoose from "mongoose"
import validate from  'validator'

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:3},
    email:{type:String,required:true,validate(value)
        {
            if(!validate.isEmail(value)){
                throw new Error("Invalid Email :")
            }
        }},
    password:{type:String,required:true,minlength:4},

})

const Usermodel=new mongoose.model('UserData',UserSchema)

export default Usermodel