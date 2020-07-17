import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const renderedList = videos.map((video) => {
    return (
      <div className="ui relaxed divided list video-list">
        <VideoItem
          key={video.id.videoId}
          onClick={onVideoSelected}
          video={video}
          onVideoSelected={onVideoSelected}
        />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
