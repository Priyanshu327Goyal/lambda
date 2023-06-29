const router=require("express").Router();
let {Tolearnitem}=require("../models/learning.model");
let {Learningitem}=require("../models/learning.model");
let {Learneditem}=require("../models/learning.model");

router.route("/").get((req, res)=>{
Tolearnitem.find()
.then(tolearnitems=>res.json(tolearnitems))
.catch(err=>console.log(err));
});

router.route("/tolearn").post(async (req, res)=>{
    const newToLearnItem= new Tolearnitem({name:req.body.name})
    await newToLearnItem.save()
    .catch(err=>console.log(err));
});

router.route("/nottolearn").post(async (req, res)=>{
    await Tolearnitem.deleteOne({_id:req.body._id})
    .then(console.log(req.body._id));

    res.redirect("/learnings");
});


router.route("/learning").get((req, res)=>{
    Learningitem.find()
    .then(learningitems=>res.json(learningitems))
    .catch(err=>console.log(err));
    });
    

router.route("/learning").post(async (req, res)=>{
     const Learning=await Tolearnitem.findOne({_id:req.body._id});
     await Tolearnitem.deleteOne({_id:req.body._id});
     const newLearning=new Learningitem({name:Learning.name});
     await newLearning.save();
     res.redirect("/learnings");
});

router.route("/notlearning").post(async (req, res)=>{
    const notlearning=await Learningitem.findOne({_id:req.body._id});
 
    await Learningitem.deleteOne({_id:req.body._id});
    if(notlearning){
    const notLearning=new Tolearnitem({
        name:notlearning.name
    });
    await notLearning.save();}
    res.redirect("/learnings");
})

router.route("/justlearned").post(async (req, res)=>{
    const justlearned=await Learningitem.findOne({_id:req.body._id});
    await Learningitem.deleteOne({_id:req.body._id});
    if(justlearned){
        const justLearned=new Learneditem({
            name:justlearned.name
        });
        await justLearned.save();
    }
    res.redirect("/learnings");
})

router.route("/learned").get((req, res)=>{
    Learneditem.find()
    .then(learneditems=>res.json(learneditems))
    .catch(err=>console.log(err));
    });

router.route("/notlearned").post(async (req, res)=>{
    const notlearned= await Learneditem.findOne({_id:req.body._id});
    await Learneditem.deleteOne({_id:req.body._id});
    const notLearned= new Learningitem({
        name:notlearned.name
    });
    await notLearned.save();

    res.redirect("/learnings");
})




    module.exports=router;