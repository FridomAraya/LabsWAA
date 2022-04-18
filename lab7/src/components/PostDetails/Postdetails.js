import React,{useState,useEffect,Fragment} from 'react';
import axios from "axios";
import './PostDetails.css'


const PostDetails = (props) => {


    console.log("POSTDETAILS UPDATE");

    const [postDetail, setPostDetail] = useState({});


    useEffect(
        () => {
            axios.get('http://localhost:8080/api/v1/posts/' + props.id)
                .then(response => {
                    setPostDetail(response.data)
                    console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
        },
        [props.id])


    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/posts/' +id)
            .then(response => {
                props.changeFetchFlag();
            })
            .catch(err => {
                console.error(err);
            })
    }


    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let postDetailsDisplay = null;

    if (props.id != 0) {

        postDetailsDisplay = (

            <div className="PostDetail">
                <div> Post Details</div>
                <h1> {postDetail.id}</h1>
                <div >
                    {postDetail.title}
                    {postDetail.author}

                </div>
                <button onClick={ () => {deleteButtonClicked(props.id)}}> Delete</button>
            </div>
        );
    }

    return postDetailsDisplay



}

export default PostDetails;