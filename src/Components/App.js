import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import YouTube from "../Api/YouTube";

class App extends React.Component {
  state = { videos: [], videoSelected: null };

  onSearchSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: "5",
        type: "video",
        key: "AIzaSyAWcdO2YKsF5vYGryQsgtMZt66AS_enO60",
      },
    });
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0],
    });
  };

  componentDidMount() {
    this.onSearchSubmit("how you like me now");
  }

  onVideoSelected = (video) => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar labelText="Search Videos" onSubmit={this.onSearchSubmit} />{" "}
        <br />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
