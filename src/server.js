const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('./models/User');

const MONGO_URI = 'mongodb+srv://admin:mARcL5KcoDDLFgSX@mongodbtutorial.1zhzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const server = async() => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log('mongodb conected');

        app.use(express.json());

        app.get('/user', async (req, res) => {
            try{
                const users = await User.find({});
                return res.send({ users });
            }catch(err){
                console.log(err);
                return res.status(500).send({ err: err.message });
            }
            
        })

        app.post('/user', async (req, res) => {
            try{
                let { username, name } = req.body;
                if(!username) return res.status(400).send({ err: 'username required'});
                if(!name || !name.first || !name.last) return res.status(400).send({ err: 'first and last name required'})
                const user = new User(req.body);
                await user.save();
                return res.send({ user });
            }catch(err){
                console.log(err);
                return res.status(500).send({ err: err.message });
            }
            
        })

        app.listen(3000, function(){
            console.log('server listening on port 3000');
        })
    }catch(err){
        console.log(err);
    }
    
}

server();


