import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name:String,
  roll_num:Number,
  wad_marks:Number,
  cc_marks:Number,
  dsbda_marks:Number,
  cns_marks:Number,
  ai_marks:Number,
})

const studentModel = mongoose.model('studentmodel',studentSchema);

export default studentModel;