import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Header from './Components/Header/Header'
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import UploadPage from "./Pages/UploadPage";
import VideoPage from "./Pages/VideoPage";

function App() {
  const [videosArray, setVideosArray] = useState('');

  function handleVideosArray(videos) {
    setVideosArray(videos);
  }

  const [selectedVideoId, setSelectedVideoId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');

  function handleVideoId(videoId) {
    setSelectedVideoId(videoId);
  }

  const [selectedVideoDetails, setSelectedVideoDetails] = useState();

  function handleSelectedVideoDetails(video) {
    setSelectedVideoDetails(video)
  }


  useEffect(() => {
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b')
      .then(response => {
        handleVideosArray(response.data);
        axios.get
          (`https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b`)
          .then
          (
            response => {
              handleSelectedVideoDetails(response.data);
            }
          )
      }
      )
      .catch(error => console.log('Axios error: ', error))
  }, [selectedVideoId])


  useEffect(() => {
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b')
      .then(response => {
        handleVideosArray(response.data);
        axios.get
          (`https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b`)
          .then
          (
            response => {
              handleSelectedVideoDetails(response.data);
            }
          )
      }
      )
      .catch(error => console.log('Axios error: ', error))
  }, [])



  if (typeof (selectedVideoDetails) == 'object' && typeof (videosArray) == 'object') {
    return (
      <div className="App">
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage selectedVideoDetails={selectedVideoDetails} videosArray={videosArray} handleVideoId={handleVideoId} />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/video/:videoId" element={<VideoPage selectedVideoDetails={selectedVideoDetails} videosArray={videosArray} handleVideoId={handleVideoId} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
