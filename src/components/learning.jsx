import React, { useEffect, useState } from "react";
import axios from "axios";

function Learning() {


    const [Item, setItem]=useState("");
    const [toLearnItems, setToLearnItems] = useState([]);
    const [learningItems, setLearningItems] = useState([]);
    const [learnedItems, setLearnedItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/learnings")
            .then(res => {
                setToLearnItems(res.data)
            })
    }, [toLearnItems]);


    useEffect(() => {
        axios.get("http://localhost:5000/learnings/learning")
            .then(res => {
                setLearningItems(res.data)
            })
    }, [learningItems]);


    useEffect(() => {
        axios.get("http://localhost:5000/learnings/learned")
            .then(res => {
                setLearnedItems(res.data)
            })
    }, [learnedItems]);



    function handleClick(e){
      e.preventDefault();
      const newToLearnItem={
        name:Item
      }
      axios.post("http://localhost:5000/learnings/tolearn", newToLearnItem)
      .catch(err=>console.log(err));
      setItem("");
    }


    function handleChange(e){
      setItem(e.target.value);
    }


    function handleNotToLearn(e){
        const notToLearn={
            _id:e.target.value==undefined?e.target.attributes[0].value:e.target.value
        }
        axios.post("http://localhost:5000/learnings/nottolearn", notToLearn)
        .catch(err=>console.log(err));
    }


   function handleToLearn(e){
      const newLearning={
        _id:e.target.value
      }

      axios.post("http://localhost:5000/learnings/learning", newLearning)
      .catch(err=>console.log(err));
   }

   function handleNotLearning(e){
     const notLearning={
        _id:e.target.value
     }
     axios.post("http://localhost:5000/learnings/notlearning", notLearning)
     .catch(err=>console.log(err));
   }

  function handleLearning(e){
     const learned={
        _id:e.target.value
     }
     axios.post("http://localhost:5000/learnings/justlearned", learned)
     .catch(err=>console.log(err));
  }

  function handleNotLearned(e){
    const notlearned={
        _id:e.target.value
    }
    axios.post("http://localhost:5000/learnings/notlearned", notlearned)
    .catch(err=>console.log(err));
  }


    return (
        <div className="learnings">
            <div className="learn">
                <h4 className="learn-title">To Learn</h4>
                <div className="box">

                {toLearnItems.map((toLearnItem, index)=>{
                    return(
                        <div key={index} className="item">
                        <input type="checkbox" value={toLearnItem._id} onClick={handleToLearn} checked={false} readOnly />
                        <p className="things">{toLearnItem.name}</p>
                        <button className="minus" value={toLearnItem._id} onClick={handleNotToLearn}><i onClick={handleNotToLearn} value={toLearnItem._id} className="fa-solid fa-trash-can"></i></button>
                    </div>

                    )
                })}
               

                    <form onSubmit={handleClick} className="item">
                        <input
                            type="text"
                            name="newToDo"
                            onChange={handleChange}
                            placeholder="What To Do"
                            autoComplete="off"
                            value={Item}
                            required
                        />
                        <button className="add" type="submit">+</button>
                    </form>
                </div>
            </div>
            <div className="learn">
                <h4 className="learn-title">Learning</h4>
                <div className="box">
                {learningItems.toReversed().map((learningitem,index)=>{
                    return (
                     
                    <div key={index} className="item">
                        <input type="checkbox" value={learningitem._id} onClick={handleLearning} checked={false} readOnly/>
                        <p className="things">{learningitem.name}</p>
                        <button className="minus" value={learningitem._id} onClick={handleNotLearning}>-</button>
                    </div>
           
                    )
                })}
                </div>
            </div>
            <div className="learn">
                <h4 className="learn-title">Learned</h4>
                <div className="box">
                {learnedItems.toReversed().map((learneditem, index)=>{
                    return (<div className="item" key={index}>
                    <i className="fa-sharp fa-regular fa-circle-check"></i>
                        <p className="things">{learneditem.name}</p>
                        <button className="minus" value={learneditem._id} onClick={handleNotLearned}>-</button>
                    </div>)
                })}
                </div>
            </div>
        </div>
    )
}

export default Learning;