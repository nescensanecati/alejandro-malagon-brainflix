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

	const url = 'https://project-2-api.herokuapp.com/videos?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b'

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
