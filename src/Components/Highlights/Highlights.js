import './Highlights.scss'

function Highlights({selectedVideoDetails}) {
    let tempHighlightsDate = new Date(selectedVideoDetails.timestamp).toLocaleDateString();
    return (
        <>
            <section className='highlights'>
                <h2 className='highlights__title'>{selectedVideoDetails.title}</h2>
                <article className='highlights__bottom-field'>
                    <div className='highlights__bottom-left'>
                        <h3 className='highlights__author'>By {selectedVideoDetails.channel}</h3>
                        <p className='highlights__date'>{tempHighlightsDate}</p>
                    </div>
                    <div className='highlights__bottom-right'>
                        <p className='highlights__loves'><picture className='highlights__heart'></picture>{selectedVideoDetails.likes}</p>
                        <p className='highlights__views'><picture className='highlights__eye'></picture>{selectedVideoDetails.views}</p>
                    </div>
                </article>
                <p className='highlights__text'>{selectedVideoDetails.description}</p>
            </section>
            <h3 className='comments__count'>{selectedVideoDetails.comments.length} comments</h3>
        </>
    )
}

export default Highlights