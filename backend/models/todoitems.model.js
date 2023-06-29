const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
    name:String
    });
 const Item =mongoose.model("Item", itemSchema);
 const Deleteitem=mongoose.model("Deleteitem", itemSchema);

 module.exports={
    Item:Item,
    Deleteitem:Deleteitem
 }