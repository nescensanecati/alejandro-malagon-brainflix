import './VideosList.scss'
import VideoCard from '../VideoCard/VideoCard'

function VideosList({selectedVideo, handleSelectVideo, videosArray}) {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                <VideoCard selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} videosArray={videosArray}/>
            </section>
        </>
    )
}

export default VideosList