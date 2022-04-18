import './NewPost.css';
import React,{ useRef } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import Post from '../Post/Post';


const NewPost = (props) => {

    const newPostForm = useRef();
    const navigate = useNavigate();

    const addButtonClicked = (e) => {
        e.preventDefault();
        const form = newPostForm.current;
        const data = {
            Id: form['id'].value,
            title: form['title'].value,
            author: form['author'].value
        };
        axios.post('http://localhost:8080/api/v1/posts', data)
        .then(data => {
            navigate('/posts');
        })
        .catch(error => {
            console.error('Error:', error);
        })
    }

    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h1> Add Post</h1>
                
                <label>Id</label>
                <input type="text" label={'id'} name={'id'}  />
                <label>Title</label>
                <input type="text" label={'title'} name={'title'} />
                <label>Author</label>
                <input type="text" label={'author'} name={'author'} />
            </form>

             <button onClick={addButtonClicked} > Add Post</button>
        </div>
    );

}

export default NewPost