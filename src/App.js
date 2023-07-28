import './App.scss';
import { useState } from 'react';
import CommentsView from './Components/CommentsView/CommentsView'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import videosDetails from './Data/video-details.json'
import videosList from './Data/videos.json'
import VideosView from './Components/VideosView/VideosView';


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videosDetails[0])

  function handleSelectVideo(videoId) {
    const foundVideo = videosDetails.find((video) => {
      return video.id === videoId
    })
    setSelectedVideo(foundVideo);
  }

  const filteredVideos = videosList.filter((video) => {
    return video.id !== selectedVideo.id;
  })



  return (
    <div className="App">
      <div className="App">
        <Header />
        <Hero selectedVideo={selectedVideo} />
        <div className='page-content'>
          <CommentsView selectedVideo={selectedVideo} videosDetails={videosDetails}/>
          <VideosView selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} filteredVideos={filteredVideos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
