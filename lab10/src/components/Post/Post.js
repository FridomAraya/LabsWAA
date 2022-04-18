import React, { useContext } from "react";
import { Selected } from "../../store/Selected";
import './Post.css'


export default function Post(props){

  const setselected = useContext(Selected);
  return (
    <div className="post" onClick={()=>{setselected(props.id)}}>
     
      <h3>Id: {props.id}</h3>
      <div>Title: {props.title}</div>
      <br/>
      <div>Author: {props.author}</div>      
    </div>
  );
}
