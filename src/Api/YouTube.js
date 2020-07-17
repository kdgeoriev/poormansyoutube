import Axios from "axios";

const KEY = "AIzaSyAWcdO2YKsF5vYGryQsgtMZt66AS_enO60";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    type: "video",
    key: `${KEY}`,
  },
});
