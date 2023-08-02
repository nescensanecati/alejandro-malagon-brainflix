import CommentsView from '../Components/CommentsView/CommentsView'
import Hero from '../Components/Hero/Hero';
import VideosView from '../Components/VideosView/VideosView';

function HomePage({selectedVideoDetails, videosArray, handleVideoId}) {
    handleVideoId('84e96018-4022-434e-80bf-000ce4cd12b8');
    return (
        <>

                    <Hero selectedVideoDetails={selectedVideoDetails} />
                    <div className='page-content'>
                        <CommentsView selectedVideoDetails={selectedVideoDetails} />
                        <VideosView selectedVideoDetails={selectedVideoDetails} videosArray={videosArray}/>
                    </div>

        </>
    );
}

export default HomePage;