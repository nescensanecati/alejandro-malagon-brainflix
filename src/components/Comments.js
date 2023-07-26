import './Comments.scss'
function Comments() {
    return (
        <>

            <section className='comments'>
                <h3 className='comments__count'>3 comments</h3>
                <form id="comments__form">
                    <div className='comments__div'>
                        <article>
                            <div className="comments__icon"></div>
                        </article>
                        <article className="comments__inputs">
                            <p className='comments__tittle'>JOIN THE CONVERSATION</p>
                            <div className='comments__bottom'>
                                <textarea
                                    name="commentInput"
                                    id="comments__textarea"
                                    placeholder="Add a new comment"
                                    className='comments__textarea'
                                    rows="1"
                                    required
                                ></textarea>
                                <button className='comments__button' type="submit"><picture></picture>COMMENT</button>
                            </div>
                        </article>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Comments