import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            title="Youtube Player"
            id="ytplayer"
            type="text/html"
            width="400"
            height="200"
            src={videoSrc}
            frameBorder="0"
          ></iframe>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
};

export default VideoPlayer;
