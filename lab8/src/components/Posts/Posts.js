import React,{useEffect, useState} from "react";
import axios from "axios";
import Post from "../Post/Post";
import "./Posts.css";


const Posts = (props) => {

  console.log("POSTS UPDATE");

  const [posts, setPosts] = useState([
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
     ]
  );

  
   const fetchPosts = () => {
    axios.get('http://localhost:8080/api/v1/posts').then(response=> {
        setPosts(response.data);
    })
    .catch(error => {
        console.log(error.message)
    })
}

useEffect(() => {
    fetchPosts()
},
  [props.fetchFlag]
)

const postList = posts.map((p) => (
    <Post 
    id={p.id} 
    title={p.title} 
    author={p.author} 
    key={p.id}
    setSelected={() => { props.setSelected(p.id) }}
    />
  ));



  return (
    <div>
      <div className="posts">{postList}</div>
    </div>
  );
};

export default Posts