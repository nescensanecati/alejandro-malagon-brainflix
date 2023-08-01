import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Header from './Components/Header/Header'
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import UploadPage from "./Pages/UploadPage";
import VideoPage from "./Pages/VideoPage";

import tempVideosDetails from './Data/video-details.json'
import tempVideosArray from './Data/videos.json'

function App() {
  const [videosArray, setVideosArray] = useState(tempVideosArray);

  function handleVideosArray(videos) {
    setVideosArray(videos);
  }

  useEffect(() => {
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b')
      .then(response => {
        handleVideosArray(response.data);
      })
      .catch(error => console.log('Axios error: ', error))
  }, [])

  const [videosDetails, setVideosDetails] = useState(tempVideosDetails);

  function handleVideosDetails(video) {
    setVideosDetails(video);
  }

  const [selectedVideo, setSelectedVideo] = useState(videosDetails[0])

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage selectedVideo={selectedVideo} videosDetails={videosDetails} videosArray={videosArray} />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/video/:videoId" element={<VideoPage videosDetails={videosDetails} videosArray={videosArray} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
