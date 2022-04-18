import Posts from "../components/Posts/Posts";
import React, { useState, useEffect } from "react";
import NewPost from "../components/NewPost/NewPost";
import "./Dashboard.css";
import PostDetails from "../components/PostDetails/Postdetails";
import { Selected } from "../store/Selected";
import Header from "./Header/Header";
import PageRoutes from "./PageRoutes";


export default function Dashboard() {
  const [fetchFlag, setFetchflag] = useState(true);
  const [selectedState, setSelectedState] = useState(0);

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
      <React.Fragment>
        <div className="header">
          <Header />
        </div>
        <div className="Post">
          <PageRoutes />
        </div>
      </React.Fragment>
       {/* <Selected.Provider value={setSelected}>  */}
        {/* <div className="Post">
          <Posts fetchFlag={fetchFlag} />
        </div>  */}
         {/* <div>
          <PostDetails id={selectedState} changeFetchFlag={changeFetchFlag} />
        </div>  */}
      {/* </Selected.Provider>  */}
    </div>
  );
}
