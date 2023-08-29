import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoDetails from '../../Components/VideoDetails/VideoDetails';


function VideoPage() {
	const { idFromParams } = useParams()
	const [videos, setVideos] = useState([])

	let defaultVideoId = null;

	if (videos.length > 0) {
		defaultVideoId = videos[0].id;
	}

	const videoIdToDisplay = idFromParams !== undefined ? idFromParams : defaultVideoId

	const filteredVideos = videos.filter((video) => {
		return video.id !== videoIdToDisplay;
	})

	const url = 'https://database-backend-brainstation-70fdd396b787.herokuapp.com/videos'

	useEffect(() => {
		axios.get(url)
			.then(response => {
				setVideos(response.data);
			})
			.catch(error => {
				console.log("axios call failed", error);
			});
	}, [])

	return (
		<>
			<VideoDetails selectedVideoId={videoIdToDisplay} filteredVideos={filteredVideos}/>
		</>
	);
}

export default VideoPage;
