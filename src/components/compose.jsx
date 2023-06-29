import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Compose(){
  const navigate=useNavigate();
    const [post, setPost]=useState({
      title:"",
      content:""
    });
    
    function handleChange(e){
      const {name, value}=e.target;
      setPost(prevNote=>{
        return {
          ...prevNote,
          [name]:value
        };
      });
    }
    function handleSubmit(e){
      e.preventDefault();
      axios.post("http://localhost:5000/posts/add", post)
      .catch(err=>console.log(err));
      setPost({
        title:"",
        content:""
      });
      navigate("/posts");
    }

    return (
        <div>
<h1 className="title">Compose</h1>
<form className="form-group" onSubmit={handleSubmit}>
  <div className="">
    <label>Title</label>
    <input className="form-control compose" type="text" name="title" placeholder="Title" onChange={handleChange} value={post.title} required/>
    <br/>
    <label>Post</label>
    <br/>
    <textarea name="content" rows="5" cols="120" placeholder="Content" onChange={handleChange} value={post.content} required></textarea>
    <br/>
    <br/>
  </div>
  <button class="btn btn-primary" type="submit" name="button">Publish</button>
  </form>
  </div>
    );
}

export default Compose;