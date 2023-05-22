import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import MusicModel from "./Model.js";

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 5000;

mongoose.connect('mongodb+srv://sagarpatil123:wad_prac@cluster0.m3rku6d.mongodb.net/',{useUnifiedTopology:true,useNewUrlParser:true})
  .then(()=>app.listen(PORT,()=>{console.log("Connected on port 5000");}))
  .catch((error)=>console.log(error))

app.get('/',(req,res)=>{
  res.render("addMusic");
})

app.post('/addsong',async(req,res)=>{
  try {
    const music_data = new MusicModel(req.body);
    await music_data.save();
    res.send("New music data is added");
  } catch (error) {
    res.send("error while adding music");
    console.log(error);
  }
})

app.get('/getmusic',async(req,res)=>{
  try {
    const music = await MusicModel.find();
    const count = await MusicModel.count();
    res.render("viewMusic",{music:music,count:count});
  } catch (error) {
    console.log(error);
  }
})

app.post('/deletesong/:id',async(req,res)=>{
  try {
    await MusicModel.findByIdAndRemove(req.params.id);
    console.log("deleted successfully");
    res.redirect("/getmusic")
  } catch (error) {
    console.log(error);
  }
})

app.get('/director',async(req,res)=>{
  try {
    const musicDirector = req.query.musicDirector;
    const searchedMusic = await MusicModel.find({musicDirector});
    const count = searchedMusic.length;
    res.render("viewMusic",{count:count,music:searchedMusic})
  } catch (error) {
    console.log(error);
  }
})