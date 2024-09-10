import {User} from "../models/user.js";
import {
    connectToDatabase,
    disconnectFromDatabase,
} from  '../db/database.js';


export const getUser = (req, res)=>{
    try{
        const data = req.body;
        res.json({
            data: data,
        });
    } catch (error) {
        console.log(error);
    }
}

export const UserLogin = async (req, res)=>{
    try{
        const {email,password} = req.body;
        if (email === ""){
            res.status(400).json({
                error:'Email can not be empty'
            })
        } 
        if (password === ""){
            res.status(400).json({
                error:'password can not be empty'
            })
        }

        await connectToDatabase();
        const user = await User.create({email,password,name:'Abdelhakim Outass'})
        await disconnectFromDatabase();

        res.json({
            data: user,
        })
    } catch (error) {
        console.log(error);
    }
}

export const Register = (req, res) =>{};

