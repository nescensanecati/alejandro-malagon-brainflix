import './VideosView.scss'
import VideosList from '../VideosList/VideosList'

function VideosView({selectedVideo, videosArray}) {
    return (
        <>
            <section className='videos-view'>
                <VideosList selectedVideo={selectedVideo} videosArray={videosArray}/>
            </section>
        </>
    )
}

export default VideosView