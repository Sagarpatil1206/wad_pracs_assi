import studentModel from "./model.js";

export const savedata = async(req,res) => {
  const data = req.body;
  try {
    const savedPost = await studentModel.create(data);
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error);
  }
}
export const getdata = async(req,res) => {
  try {
    const allPosts = await studentModel.find();
    const count = allPosts.length;
    res.status(200).json({allPosts,count});  
  } catch (error) {
    console.log(error);
  }
}
export const updatedata = async(req,res) => {
  const {roll_num,name} = req.body;
  try {
    const updatedPost = await studentModel.updateOne({roll_num},{$inc:{wad_marks:10, cc_marks: 10, dsbda_marks: 10, cns_marks: 10, ai_marks: 10}});
    const nameupdate = await studentModel.updateOne({roll_num},{$set:{name:name}});
    res.status(200).json({updatedPost,nameupdate});
  } catch (error) {
    console.log(error);
  }
}
export const deletedata = async(req,res) => {
   console.log("nn");
  const {roll_num} = req.body;
  try {
    const deleteStudent = await studentModel.deleteOne({roll_num:roll_num});
    res.status(200).json(deleteStudent);
  } catch (error) {
    console.log(error);
  }
}
export const filterdata = async(req,res) => {
  const {name} = req.body;
  try {
    const morethan20dsbda = await studentModel.find({dsbda_marks:{$gt:20}},'name'); //to just get name
    // const filtredPosts = await studentModel.find({dsbda_marks:{$gt:20}}); //to get whole data of student

    const ccandcns = await studentModel.find({$and:[
      {cc_marks:{$lt:50}},
      {cns_marks:{$lt:40}}
    ]},'name');

    const allabove25 = await studentModel.find({$and:[
      {cc_marks:{$gt:25}},
      {cns_marks:{$gt:25}},
      {dsbda_marks:{$gt:25}},
      {wad_marks:{$gt:25}},
      {ai_marks:{$gt:25}}
    ]},'name');

    const withGivenName = await studentModel.find({name});
    res.status(200).json({morethan20dsbda,ccandcns,allabove25,withGivenName});
  } catch (error) {
    console.log(error);
  }
}