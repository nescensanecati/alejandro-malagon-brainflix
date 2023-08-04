import './VideoDetails.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../../Components/Hero/Hero';
import CommentsView from '../../Components/CommentsView/CommentsView';
import VideosView from '../../Components/VideosView/VideosView';

function VideoDetails({ selectedVideoId , filteredVideos}) {
	const [selectedVideo, setSelectedVideo] = useState(null)

	useEffect(() => {
		if (selectedVideoId === null) return
		const url = `https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=054cc34c-ac41-4ee1-8a1a-40f9b03cd86b`

		axios.get(url)
			.then(response => {
				setSelectedVideo(response.data);
			})
			.catch(error => {
				console.log("error calling axios", error);
			})
	}, [selectedVideoId])


	if (selectedVideo === null) {
		return (
			<div>Loading...</div>
		)
	}

	return (
		<main>
			<Hero selectedVideoDetails={selectedVideo} />
			<div className='page-content'>
				<CommentsView selectedVideoDetails={selectedVideo} />
				<VideosView selectedVideoDetails={selectedVideo} filteredVideos={filteredVideos} />
			</div>
		</main>
	);
}

export default VideoDetails;