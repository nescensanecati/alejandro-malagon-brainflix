import CommentsView from '../Components/CommentsView/CommentsView'
import Hero from '../Components/Hero/Hero';
import VideosView from '../Components/VideosView/VideosView';

function HomePage({selectedVideoDetails, videosArray}) {
    
    return (
        <>
            <div className="App">
                <div className="App">
                    <Hero selectedVideoDetails={selectedVideoDetails} />
                    <div className='page-content'>
                        <CommentsView selectedVideoDetails={selectedVideoDetails} />
                        <VideosView selectedVideoDetails={selectedVideoDetails} videosArray={videosArray}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;