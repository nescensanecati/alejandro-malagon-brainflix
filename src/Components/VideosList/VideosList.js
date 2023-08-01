import './VideosList.scss'
import VideoCard from '../VideoCard/VideoCard'

function VideosList({selectedVideo, videosArray}) {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                <VideoCard selectedVideo={selectedVideo} videosArray={videosArray}/>
            </section>
        </>
    )
}

export default VideosList