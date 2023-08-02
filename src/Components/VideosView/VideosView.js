import './VideosView.scss'
import VideosList from '../VideosList/VideosList'

function VideosView({selectedVideoDetails, videosArray}) {
    return (
        <>
            <section className='videos-view'>
                <VideosList selectedVideoDetails={selectedVideoDetails} videosArray={videosArray}/>
            </section>
        </>
    )
}

export default VideosView