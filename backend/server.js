//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/lambdaDB",{ useNewUrlParser:true});

    const itemsRouter=require('./routes/items');
    const blogsRouter=require('./routes/blogs');
    const learningsRouter=require('./routes/learnings');
    const problemsRouter=require("./routes/problems");

    app.use('/items', itemsRouter);
    app.use('/posts', blogsRouter);
    app.use('/learnings', learningsRouter);
    app.use('/problems', problemsRouter);


}




app.listen(5000, ()=>{
    console.log("server is running on port: 5000");
});
