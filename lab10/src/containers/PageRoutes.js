
import { Route, Routes, Navigate } from "react-router";
import NewPost from "../components/NewPost/NewPost";
import PostDetails from "../components/PostDetails/Postdetails"; 
import Posts from "../components/Posts/Posts";


export default function PageRoutes(props) {
    return (
        <Routes>
                <Route path="/" element={<Navigate replace to="/posts" />}/>
                <Route path="posts" element={<Posts />}/>
                <Route path="postdetail" element={<PostDetails />}/>
                <Route path="Create-post" element={<NewPost />}/>
        </Routes>
    );
}