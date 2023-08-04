import './VideosView.scss'
import VideosList from '../VideosList/VideosList'

function VideosView({selectedVideoDetails, filteredVideos}) {
    return (
        <>
            <section className='videos-view'>
                <VideosList selectedVideoDetails={selectedVideoDetails} filteredVideos={filteredVideos}/>
            </section>
        </>
    )
}

export default VideosView