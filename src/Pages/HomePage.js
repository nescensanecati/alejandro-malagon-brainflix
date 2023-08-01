import CommentsView from '../Components/CommentsView/CommentsView'
import Hero from '../Components/Hero/Hero';
import VideosView from '../Components/VideosView/VideosView';

function HomePage({selectedVideo, videosDetails, handleSelectVideo, videosArray}) {
    return (
        <>
            <div className="App">
                <div className="App">
                    <Hero selectedVideo={selectedVideo} />
                    <div className='page-content'>
                        <CommentsView selectedVideo={selectedVideo} videosDetails={videosDetails} />
                        <VideosView selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} videosArray={videosArray}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;