function VideoCard({ selectedVideo, handleSelectVideo, filteredVideos}) {
    return (
        <>
            {filteredVideos.map((video) => {
                if (video.id !== selectedVideo.id) {
                    return (
                        <div key={video.id}>
                                <div onClick={() => handleSelectVideo(video.id)} className='videos__card'>
                                    <img alt='' src={video.image} className='videos__image'></img>
                                    <article className='videos__description'>
                                        <h3 className='videos__title'>{video.title}</h3>
                                        <p className='videos__author'>{video.channel}</p>
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