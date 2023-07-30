import './CommentsList.scss'

function CommentsList({ selectedVideoComments }) {
    
    function timeDifference(current, previous) {

        let msPerMinute = 60 * 1000;
        let msPerHour = msPerMinute * 60;
        let msPerDay = msPerHour * 24;
        let msPerMonth = msPerDay * 30;
        let msPerYear = msPerDay * 365;
    
        let elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }
    
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }
    
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
    
        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        }
    
        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        }
    
        else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    }

    return (
        <div>
            <section className="new-comments">
                {selectedVideoComments.map((comment) => {
                    return (
                        <div key={comment.id} >
                            <div className='new-comments__row'>
                                <article className='new-comments__left'>
                                    <div className="new-comments__logo"></div>
                                </article>
                                <article className='new-comments__right'>
                                    <div className='new-comments__card'>
                                        <h3 className='new-comments__title'>{comment.name}</h3>
                                        <h4 className='new-comments__date'>{timeDifference(Date.now(), comment.timestamp)}</h4>
                                        <p className='new-comments__text'>{comment.comment}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    )
                }
                )
                }
            </section>
        </div>
    )
}

export default CommentsList