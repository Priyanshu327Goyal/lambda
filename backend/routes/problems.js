const router=require("express").Router();

let Problem=require("../models/problems.model");

router.route("/").get((req, res)=>{
//     Problem.find()
// .then(problems=>res.json(problems))
// .catch(err=>console.log(err));
console.log("yes");
});


module.exports=router;