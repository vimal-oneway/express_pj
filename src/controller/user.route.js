import express from "express"
import { UserModel } from "../database/model/user.model.js";
 const router = express.Router();

router.post("/login", async(req, res)=>{
    const {email, password, username} = req.body;

    // Sign Up
    if(username!=""){
        let newUser = await UserModel.create({
            email:email,
            password:password,
            username:username
        });

        if(!newUser) {
            return res.json({message:"Unable to create an user", success:false});
        }

        const {password: ps, ...newUserWithoutPassword} = newUser;

        return res.json({message:"Successfully created user",user: newUserWithoutPassword , success:true});
    }


    // login
    const exitingUser = await UserModel.findOne({email:email, password:password});

    if(!exitingUser) {
        return res.json({message:"Email or password are incorrect", success: false});
    }

    return res.json({message:"Successfully logged In.", user: exitingUser, success: true});

})

export default router;
