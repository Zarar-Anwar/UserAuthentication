import Usermodel from "../model/model.js"
import bcrypt from 'bcrypt'


class UserController{

   static ViewRegistration=(req,res)=>{
   res.render('Registration',{title:"Registration"})
   }

   static ViewLogin=(req,res)=>{
    res.render('Login',{title:"Login"})
   }

  static Registration=async(req,res)=>{
      const HashPassward=await new bcrypt.hash(req.body.password,10)
      const {name,email}=req.body
      const doc=await Usermodel({
        name:name,
        email:email,
        password:HashPassward,
      })
      doc.save()
      res.redirect("/")
    }


    static Verification=async (req,res)=>{
     
        const {email,password}=req.body
        const result=await Usermodel.find({email:email})
        console.log(result.email)  
        if(result.email)
        {
            const matchHash= bcrypt.compare(password,result.password)
            if(email==result.email && password==matchHash)
            {
                res.render("DashBoard")
            }
            else
            {
            res.render('Login')
            }
        }
        else
        {
       res.send("Invalid Email")
       
        }

    }
}
export default UserController