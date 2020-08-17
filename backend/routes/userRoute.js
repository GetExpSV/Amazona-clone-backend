import express from 'express';
import User from '../models/userModel'
import {getToken} from "../util";

const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }

    else{
        res.status(401).send({msg: 'Invalid email or password'})
    }
})

router.get('/createadmin', async (req, res) => {
    try{
        const user = new User({
            name: 'Sam',
            email: 'Sam@gmail.com',
            password: '123456'
        });

        const newUser = await user.save();
        res.send(newUser)
    }catch(error) {
        res.send({msg:error.message})
    }
})

export default router