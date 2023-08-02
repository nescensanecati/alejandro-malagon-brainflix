import { useParams, Navigate } from "react-router-dom";
import CommentsView from '../Components/CommentsView/CommentsView'
import VideosView from '../Components/VideosView/VideosView'
import Hero from '../Components/Hero/Hero'



function VideoPage({ selectedVideoDetails, handleVideoId, videosArray }) {
    const { videoId } = useParams();
    const video = videosArray.find((video) => video.id === videoId);
    handleVideoId(videoId)
    if (!video) {
        return <Navigate to={`/`} />;
    }
    if (video.id === videoId) {
        return (
            <>
                    <Hero selectedVideoDetails={selectedVideoDetails} />
                    <div className='page-content'>
                        <CommentsView selectedVideoDetails={selectedVideoDetails} />
                        <VideosView selectedVideoDetails={selectedVideoDetails} videosArray={videosArray}/>
                    </div>
        </>
        );
    }

}

export default VideoPage;