import mongoose, { mongo } from "mongoose";

const MusicSchema = new mongoose.Schema({
  songName:String,
  filmName:String,
  musicDirector:String,
  singer:String,
  // actor:String,
  // actress:String
})

const MusicModel = mongoose.model('musicModel',MusicSchema);

export default MusicModel;