import './Highlights.scss'

function Highlights({selectedVideo}) {
    let tempHighlightsDate = new Date(selectedVideo.timestamp).toLocaleDateString();
    return (
        <>
            <section className='highlights'>
                <h2 className='highlights__title'>{selectedVideo.title}</h2>
                <article className='highlights__bottom-field'>
                    <div className='highlights__bottom-left'>
                        <h3 className='highlights__author'>By {selectedVideo.channel}</h3>
                        <p className='highlights__date'>{tempHighlightsDate}</p>
                    </div>
                    <div className='highlights__bottom-right'>
                        <p className='highlights__loves'><picture className='highlights__heart'></picture>{selectedVideo.likes}</p>
                        <p className='highlights__views'><picture className='highlights__eye'></picture>{selectedVideo.views}</p>
                    </div>
                </article>
                <p className='highlights__text'>{selectedVideo.description}</p>
            </section>
            <h3 className='comments__count'>{selectedVideo.comments.length} comments</h3>
        </>
    )
}

export default Highlights