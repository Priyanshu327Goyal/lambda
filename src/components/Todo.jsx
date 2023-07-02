import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {


  const [item, setItem] = useState("");

  const [items, setItems] = useState([]);
  const [itemsDone, setItemsDone]=useState([]);


useEffect(()=>{
  axios.get('http://localhost:5000/items')
  .then(res=>{
    setItems(res.data);
  });
},[items]);


 useEffect(()=>{
    axios.get('http://localhost:5000/items/done')
  .then(res=>{
    setItemsDone(res.data);
  });
  if(itemsDone.length>5){
    const lastItem=itemsDone[0];
    const sendItem={
      _id:lastItem._id
    }
      axios.post("http://localhost:5000/items/done-delete", sendItem)
      .catch(err=>console.log(err));
   }
 },[itemsDone]);



  function handleChange(event) {
    setItem(event.target.value);
  }


  function handleClick(e) {
    const newItem = {
      name: item
    }
    axios.post("http://localhost:5000/items/add", newItem)
    .catch(err=>console.log(err));
    setItem("");
  }


  function handleItemDone(e){
    const doneId={
      _id: e.target.value
    }
      axios.post("http://localhost:5000/items/done", doneId)
      .catch(err=>console.log(err));
  }
  

  function handleDelete(e){
    const deleteId={
      _id:  e.target.value == undefined ? e.target.attributes[0].value : e.target.value
     }
     
      axios.post("http://localhost:5000/items/done-delete", deleteId)
      .catch(err=>console.log(err));
  }


  function handleItemBack(e){
    const backId={
      _id:e.target.value
    }
    axios.post("http://localhost:5000/items/back", backId)
    .catch(err=>console.log(err));
  }
  

  return (
    <div className="todo">

    <div>
      <div className="box" id="heading">
        <h1>Things To Do Today</h1>
      </div>
      <div className="box">
        {items.map((item, index) => {
          return (
            <div  key={index} className="item">
              <input type="checkbox" onChange={handleItemDone} value={item._id} checked={false}/>
              <p >{item.name}</p>
            </div>
          );
        })}

        <form onSubmit={handleClick} className="item">
          <input
            type="text"
            class="toDoForm"
            name="newToDo"
            onChange={handleChange}
            placeholder="What To Do"
            autoComplete="off"
            value={item}
            required
          />
          <button className="add" type="submit">+</button>
        </form>
      </div>
    </div>


    <div>
      <div className="box" id="heading">
        <h1>Things Done</h1>
      </div>
      <div className="box">
        {itemsDone.toReversed().map((itemDone, index) => {
          return (
            <div  key={index} className="item">
              <input type="checkbox" onChange={handleItemBack} value={itemDone._id} defaultChecked/>
              <p className="doneItem">{itemDone.name}</p>
              <button className="dustbin" onClick={handleDelete}  value={itemDone._id}><i onClick={handleDelete} value={itemDone._id} className="fa-solid fa-trash-can"></i></button>
            </div>
          );
        })}
      </div>
    </div>
   
    </div>
  );
}
export default Todo;