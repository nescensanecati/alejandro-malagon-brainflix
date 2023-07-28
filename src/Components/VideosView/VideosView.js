import './VideosView.scss'
import VideosList from '../VideosList/VideosList'

function VideosView({selectedVideo, handleSelectVideo, filteredVideos}) {
    return (
        <>
            <section className='videos-view'>
                <VideosList selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} filteredVideos={filteredVideos}/>
            </section>
        </>
    )
}

export default VideosView