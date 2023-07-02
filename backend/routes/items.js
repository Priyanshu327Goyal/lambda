const router=require("express").Router();
let {Item}=require("../models/todoitems.model");
let {Deleteitem}=require("../models/todoitems.model");

router.route('/').get((req, res)=>{
    Item.find()
    .then(items=>res.json(items))
    .catch(err=>console.log(err));
});

router.route('/add').post(async (req, res)=>{
    const newItem=new Item({name:req.body.name});
    await newItem.save()
    .catch(err=>console.log(err));
});


router.route('/done').post(async(req, res)=>{
    const doneId=req.body._id;
    const foundItem=await Item.findOne({_id: doneId});
    await Item.deleteOne({_id:doneId});
    const doneItem=new Deleteitem({name:foundItem.name});
    await doneItem.save();
   ;
});

router.route('/done').get(async(req, res)=>{
    Deleteitem.find()
    .then(deleteitems=>res.json(deleteitems))
    .catch(err=>console.log(err));
});

router.route("/done-delete").post(async(req,res)=>{
   const deleteId=req.body._id;
   await Deleteitem.deleteOne({_id:deleteId})
   .catch(err=>console.log(err));
});

router.route("/back").post(async(req, res)=>{
    const backId=req.body._id;
    const foundDoneItem=await Deleteitem.findOne({_id: backId});
    await Deleteitem.deleteOne({_id:backId});
    const backItem=new Item({name:foundDoneItem.name});
    await backItem.save();
});

module.exports=router;