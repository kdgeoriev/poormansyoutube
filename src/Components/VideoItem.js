import React from "react";
import "../css/VideoItem.css";

const VideoItem = ({ video, onVideoSelected }) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelected(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
        className="ui small image"
      />
      <div className="content">
        <div className="header">{video.snippet.channelTitle}</div>
      </div>{" "}
    </div>
  );
};

export default VideoItem;
