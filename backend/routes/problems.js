const router=require("express").Router();

let Problem=require("../models/problems.model");

router.route("/").get((req, res)=>{
    Problem.find()
.then(problems=>res.json(problems))
.catch(err=>console.log(err));
});

router.route("/").post(async (req, res)=>{
    const problem =new Problem({
        name: req.body.name,
        link:req.body.link,
        difficulty: req.body.difficulty,
        topic: req.body.topic,
        platform: req.body.platform,
    });
    await problem.save()
    .catch(err=>console.log(err));

});

router.route("/delete").post(async (req, res)=>{
    const deleteId=req.body._id;
    await Problem.deleteOne({_id:deleteId})
    .catch(err=>console.log(err));
})


module.exports=router;