import './VideosView.scss'
import VideosList from '../VideosList/VideosList'

function VideosView({selectedVideo, handleSelectVideo, videosArray}) {
    return (
        <>
            <section className='videos-view'>
                <VideosList selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} videosArray={videosArray}/>
            </section>
        </>
    )
}

export default VideosView