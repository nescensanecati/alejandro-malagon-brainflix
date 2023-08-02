import { useParams, Navigate } from "react-router-dom";
import CommentsView from '../Components/CommentsView/CommentsView'
import Hero from '../Components/Hero/Hero';
import VideosView from '../Components/VideosView/VideosView';

function VideoPage({videosDetails, videosArray}) {
    const { videoId } = useParams();
    const video = videosDetails.find((video) => video.id === videoId);
    if (!video) {
        return <Navigate to={`/`} />;
    }
    if (video.id === videoId) {
        return (
            <>
            <div className="App">
                <div className="App">
                    <Hero selectedVideo={video} />
                    <div className='page-content'>
                        <CommentsView selectedVideo={video} />
                        <VideosView selectedVideo={video} videosArray={videosArray}/>
                    </div>
                </div>
            </div>
        </>
        );
    }
    
}

export default VideoPage;