import axios from 'axios';

const KEY = 'AIzaSyBFRgkH7EpyQgEWZYpC-EFrUWq3jo6d-o0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', //These al parameters are taken from api of youtube
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
