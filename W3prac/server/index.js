import express from 'express'
import cors from 'cors'
import {LocalStorage} from 'node-localstorage'
import bodyParser from 'body-parser'

const app = express();

const localstorage = new LocalStorage('./scratch');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
  const users = JSON.parse(localstorage.getItem('users'));
  return res.status(200).json(users);
})

app.post('/',(req,res)=>{
  const {name,email,password} = req.body;
  let userList = JSON.parse(localstorage.getItem('users')) || [];
  userList.push({
    name,email,password
  })
  localstorage.setItem('users',JSON.stringify(userList));
  return res.status(200).json({message:'succesfully added userdata'});
})

app.listen(3000,()=>{
  console.log("Listening on port number 3000");
})