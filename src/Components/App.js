import React, { Component } from 'react';
import SearchBar from './SerachBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onTermSubmit('Google developers');
  }
  //This is the callback whose refernce is sent to VideoItem through VideoList
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }; //callback function whenever the form is submitted gets called
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <h2 className="ui huge header">
          <i className="youtube icon " style={{ color: 'red' }}></i>
          <div className="content">Youtube Clone</div>
        </h2>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
