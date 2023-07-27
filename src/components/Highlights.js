import './Highlights.scss'
import VideoDisplayedId from './VideoDisplayedId'

function Highlights() {
    let tempHighlightsDate = new Date(VideoDisplayedId.timestamp).toLocaleDateString();
    return (
        <>
            <section className='highlights'>
                <h2 className='highlights__tittle'>{VideoDisplayedId.title}</h2>
                <article className='highlights__bottom-field'>
                    <div className='highlights__bottom-left'>
                        <h3 className='highlights__author'>By {VideoDisplayedId.channel}</h3>
                        <p className='highlights__date'>{tempHighlightsDate}</p>
                    </div>
                    <div className='highlights__bottom-right'>
                        <p className='highlights__loves'><picture className='highlights__heart'></picture>{VideoDisplayedId.likes}</p>
                        <p className='highlights__views'><picture className='highlights__eye'></picture>{VideoDisplayedId.views}</p>
                    </div>
                </article>
                <p className='highlights__text'>{VideoDisplayedId.description}</p>
            </section>
        </>
    )
}

export default Highlights