import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UploadPage from "./Pages/UploadPage";
import NotFoundPage from "./Pages/NotFoundPage";
import './App.scss';
import videosDetails from './Data/video-details.json'
import videosList from './Data/videos.json'
import { useState } from "react";
import Header from './Components/Header/Header'


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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage selectedVideo={selectedVideo} videosDetails={videosDetails} handleSelectVideo={handleSelectVideo} filteredVideos={filteredVideos}/>} />
        <Route path="upload" element={<UploadPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
