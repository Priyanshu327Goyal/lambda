const router=require("express").Router();
let Post=require("../models/blog.model");


router.route('/').get((req, res)=>{
    Post.find()
    .then(posts=>res.json(posts))
    .catch(err=>console.log(err));
});

router.route("/:postId").get((req, res)=>{
    Post.findOne({_id:req.params.postId})
    .then(posts=>res.json(posts))
    .catch(err=>console.log(err));
})

router.route('/add').post(async (req, res)=>{
    const newPost=new Post({
        title:req.body.title,
        content:req.body.content});
    await newPost.save()
    .then(()=>console.log('Post added'))
    .catch(err=>console.log(err));
});


router.route('/delete').post(async(req, res)=>{
    const deleteId=req.body._id;
    await Post.deleteOne({_id: deleteId})
    .then(()=>console.log("succesfully deleted"))
    .catch(err=>console.log(err));
});



module.exports=router;