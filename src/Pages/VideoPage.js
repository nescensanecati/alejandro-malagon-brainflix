import { useParams, Navigate } from "react-router-dom";
import HomePage from "./HomePage";

function VideoPage({videosDetails, videosArray}) {
    const { videoId } = useParams();
    const video = videosDetails.find((video) => video.id === videoId);
    if (!video) {
        return <Navigate to={`/`} />;
    }
    if (video.id === videoId) {
        return (
            <>
                <HomePage selectedVideo={video} videosDetails={videosDetails} videosArray={videosArray}/>
            </>
        );
    }
    
}

export default VideoPage;