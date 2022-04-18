import Posts from "../components/Posts/Posts";
import React, { useState, useEffect } from "react";
import NewPost from "../components/NewPost/NewPost";
import "./Dashboard.css";
import PostDetails from "../components/PostDetails/Postdetails";
import { ThemeColorContext } from "../store/ThemeColor";

export default function Dashboard() {
  const [fetchFlag, setFetchflag] = useState(true);
  const [selectedState, setSelectedState] = useState(0);
  // const [title, setTitle] = useState("");
  // const [posts, setPosts] = useState([
  //   { id: 111, title: "Happiness", author: "John" },
  //   { id: 112, title: "MIU", author: "Dean" },
  //   { id: 113, title: "Enjoy Life", author: "Jasmine" },
  // ]);

  // const titleHandler = (title) => {
  //   posts[0].title = title;
  //   setPosts([...posts]);
  // };


  const changeFetchFlag = () => {
    setFetchflag(!fetchFlag);
  };

  const setSelected = (id) => {
    setSelectedState(id);
  };

  useEffect(() => {
    return () => {
      console.log("Something was unmounted");
    };
  }, [fetchFlag]);

  return (
    <div>
      {/* <Posts posts={posts} />
      <fieldset className="field">
        <input
          type="text"
          id="newTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        ></input>
        <br />
        <br />
        <button onClick={() => titleHandler(title)}>Change Title</button>
       
        
      </fieldset> */}

      <ThemeColorContext.Provider>
        <div className="Post">
          <Posts setSelected={setSelected} fetchFlag={fetchFlag} />
        </div>
        <div>
          <PostDetails id={selectedState} changeFetchFlag={changeFetchFlag} />
        </div>

        <div>
          {fetchFlag ? <NewPost changeFetchFlag={changeFetchFlag} /> : null}
        </div>
      </ThemeColorContext.Provider>
    </div>
  );
}
