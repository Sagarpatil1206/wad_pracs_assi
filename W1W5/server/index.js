import express from "express"
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import routes from './Route.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/',routes);

mongoose.set("strictQuery",false);
const PORT = 5000;

mongoose.connect('mongodb+srv://sagarpatil123:wad_prac@cluster0.m3rku6d.mongodb.net/',{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>{console.log("connected successfully on port 5000")}))
  .catch((error)=>{console.log("error in connection");console.log(error);});
