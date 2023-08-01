import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from './Components/Header/Header'
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import UploadPage from "./Pages/UploadPage";
import VideoPage from "./Pages/VideoPage";
import videosDetails from './Data/video-details.json'
import videosArray from './Data/videos.json'

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videosDetails[0])


  function handleSelectVideo(videoId) {
    const foundVideo = videosDetails.find((video) => {
      return video.id === videoId
    })
    setSelectedVideo(foundVideo);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage selectedVideo={selectedVideo} videosDetails={videosDetails} handleSelectVideo={handleSelectVideo} videosArray={videosArray}/>} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/video/:videoId" element={<VideoPage selectedVideo={selectedVideo} videosDetails={videosDetails} handleSelectVideo={handleSelectVideo} videosArray={videosArray}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
