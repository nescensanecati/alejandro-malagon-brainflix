import { useParams, Navigate } from "react-router-dom";
import HomePage from "./HomePage";

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
                <HomePage selectedVideoDetails={selectedVideoDetails} videosArray={videosArray} />
            </>
        );
    }

}

export default VideoPage;