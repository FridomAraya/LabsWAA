import React from "react";
import './Post.css'

export default function Post(props){
  return (
    <div className="post" onClick={props.setSelected}>
     
      <p>Id: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>      
    </div>
  );
}
