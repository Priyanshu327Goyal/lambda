import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Problem(){
    const [problem, setProblem]=useState({
        name:"",
        difficulty:Number,
        link:"",
        platform:"",
        topic:""
    });

    const [problems, setProblems]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/problems")
        .then(res => {
            setProblems(res.data)
        });
    }, [problems]);

    function handleChange(e){
        const {name, value}=e.target;
        setProblem(prev=>{
          return {
            ...prev,
            [name]:value
          };
        });
      }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:5000/problems", problem)
        .catch(err=>console.log(err));
        setProblem({
            name:"",
            link:"",
            difficulty:Number,
            platform:"",
            topic:""
        });
    }

    function handleDelete(e){
        const deleteId={
            _id:e.target.value
        };
        axios.post("http://localhost:5000/problems/delete", deleteId)
        .catch(err=>console.log(err));
    }


    return (
        <div className="container">
            <div><h1>Problems</h1></div>
            <div class="problems">
            <div class="problem-form problem">
                <form className="form-group" onSubmit={handleSubmit}>
                <input className="form-control name" type="text" onChange={handleChange} name="name" placeholder="Name" value={problem.name} required/>
                <input className="form-control link" type="link" onChange={handleChange} name="link" placeholder="Link" value={problem.link} required/>
                <input className="form-control topic" type="text" onChange={handleChange} name="topic" placeholder="Topic" value={problem.topic} required/>
                <input className="form-control difficulty" type="text" onChange={handleChange} name="difficulty" placeholder="Difficulty" value={problem.difficulty} required/>
                <input className="form-control platform" type="text" onChange={handleChange} name="platform" placeholder="Platform" value={problem.platform} required/>
                <button className="btn btn-primary" type="submit" name="button">Add</button>
                </form>
            </div>

            {problems.toReversed().map((problem, index)=>{
                return (
                    <div class="problem" key={index}>
                    <p><a href={problem.link} target="_blank">{problem.name}</a></p>
                    <p>{problem.topic}</p>
                    <p>Diffuculty: {problem.difficulty}</p>
                    <p>{problem.platform}</p>
                    <button className="btn btn-primary delete" onClick={handleDelete} value={problem._id}>Delete</button>

                    </div>
                )
            })}
              
            </div>
        </div>
    )
}


export default Problem;