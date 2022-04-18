import './NewPost.css';
import React,{ useRef } from 'react';
import axios from 'axios';


const NewPost = (props) => {

    const newPostForm = useRef();

    const addButtonClicked = () => {
        const form = newPostForm.current;
        const data = {
            id: form['id'].value,
            title: form['title'].value,
            author: form['author'].value
        }
        axios.post('http://localhost:8080/api/v1/posts', data)
            .then(response => {
                props.changeFetchFlag();
            })
            .catch()
    }

    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h1> Add Post</h1>
                
                <label>id</label>
                <input type="text" label={'id'} name={'id'}  />
                <label>title</label>
                <input type="text" label={'title'} name={'title'} />
                <label>author</label>
                <input type="text" label={'author'} name={'author'} />
            </form>

             <button onClick={addButtonClicked} > Add Post</button>
        </div>
    );

}

export default NewPost