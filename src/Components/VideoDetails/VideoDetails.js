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
		const url = `http://localhost:8000/videos/${selectedVideoId}`

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