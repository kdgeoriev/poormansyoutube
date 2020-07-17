import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [videoSelected, setVideoSelected] = useState(null);
  //calling the hook
  const [videos, search] = useVideos("how you like me now");

  useEffect(() => {
    setVideoSelected(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar labelText="Search Videos" onSubmit={search} /> <br />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoPlayer video={videoSelected} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelected={setVideoSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
