import { Link } from 'react-router-dom';

function VideoCard({ selectedVideo, filteredVideos}) {
    return (
        <>
            {filteredVideos.map((video) => {
                if (video.id !== selectedVideo.id) {
                    return (
                        <div key={video.id}>
                                <div className='videos__card'>
                                <Link className='videos__link-img' to={`/video/${video.id}`}><img alt='' src={video.image} className='videos__image'></img></Link>
                                    <article className='videos__description'>
                                    <Link className='videos__link'  to={`/video/${video.id}`}><h3 className='videos__title'>{video.title}</h3></Link>
                                    <Link className='videos__link'  to={`/video/${video.id}`}><p className='videos__author'>{video.channel}</p></Link>
                                    </article>
                                </div>
                        </div>)
                }
                else {
                    return '';
                }
            })}
        </>
    )
}

export default VideoCard