import './VideosList.scss'
import VideoCard from '../VideoCard/VideoCard'

function VideosList({selectedVideoDetails, videosArray}) {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                <VideoCard selectedVideo={selectedVideoDetails} videosArray={videosArray}/>
            </section>
        </>
    )
}

export default VideosList