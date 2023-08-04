import './VideosList.scss'
import VideoCard from '../VideoCard/VideoCard'

function VideosList({selectedVideoDetails, filteredVideos}) {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                <VideoCard selectedVideo={selectedVideoDetails} filteredVideos={filteredVideos}/>
            </section>
        </>
    )
}

export default VideosList