import './Videos.scss'
import VideosDetail from './VideosDetail'
import VideoDisplayedId from './VideoDisplayedId'

function Videos() {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                {VideosDetail.map((tempVideo) => {
                    if (tempVideo.id !== VideoDisplayedId.id) {
                        return (
                        <>
                            <div className='videos__card'>
                                <img alt='' src={tempVideo.image} className='videos__image'></img>
                                <article className='videos__description'>
                                    <h3 className='videos__tittle'>{tempVideo.title}</h3>
                                    <p className='videos__author'>{tempVideo.channel}</p>
                                </article>
                            </div>
                        </>)
                    }
                })}
            </section>
        </>
    )
}

export default Videos