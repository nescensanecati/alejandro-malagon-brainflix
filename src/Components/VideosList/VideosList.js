import './VideosList.scss'
import VideoCard from '../VideoCard/VideoCard'

function VideosList({selectedVideo, handleSelectVideo, filteredVideos}) {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                <VideoCard selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} filteredVideos={filteredVideos}/>
            </section>
        </>
    )
}

export default VideosList