import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Problem(){
    const [problem, setProblem]=useState({
        name:"",
        difficulty:Number,
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



    return (
        <div className="container">
            <div><h1>Problems</h1></div>
            <div class="problems">
            <div class="problem-form problem">
                <form className="form-group">
                <input className="form-control name" type="text" name="name" placeholder="Name" required/>
                <input className="form-control link" type="link" name="link" placeholder="Link" required/>
                <input className="form-control topic" type="text" name="topic" placeholder="Topic" required/>
                <input className="form-control difficulty" type="text" name="difficulty" placeholder="Difficulty" required/>
                <input className="form-control platform" type="text" name="platform" placeholder="Platform" required/>
                </form>
            </div>
              
            </div>
        </div>
    )
}


export default Problem;