import React, { useContext } from "react";
import { Selected } from "../../store/Selected";
import './Post.css'


export default function Post(props){

  const setselected = useContext(Selected);
  return (
    <div className="post" onClick={()=>{setselected(props.id)}}>
     
      <p>Id: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>      
    </div>
  );
}
