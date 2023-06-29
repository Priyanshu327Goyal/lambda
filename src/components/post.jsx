import React, {useState, useEffect,} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function Post(){
    const navigate=useNavigate();
    let {postId}=useParams();
    const [post, setPost]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:5000/posts/"+postId)
        .then(res=>{
          setPost(res.data);
        });
    },[]);

    function handleDelete(e){
        const deleteId={
            _id:e.target.value
        };
        axios.post("http://localhost:5000/posts/delete",deleteId)
        .catch(err=>console.log(err));
        navigate("/posts");
    }

return (
    <div className="blog">
    <div className="post">
    <h1 className="post-title">{post.title}</h1>
    <p>
     {post.content}
    </p>
    <hr/>
</div>
<button className="btn btn-primary btn-lg" onClick={handleDelete} value={post._id}>Delete</button>
</div>
)

}

export default Post;