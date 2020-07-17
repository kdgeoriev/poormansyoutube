import { useState, useEffect } from "react";
import YouTube from "../Api/YouTube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: "5",
        type: "video",
        key: "AIzaSyAWcdO2YKsF5vYGryQsgtMZt66AS_enO60",
      },
    });
    setVideos(response.data.items);
  };

  //same as below but it doesn't work:  return {videos, onTermSubmit};
  return [videos, search];
};

export default useVideos;
