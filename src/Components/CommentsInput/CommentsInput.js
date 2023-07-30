import './CommentsInput.scss'

function CommentsInput() {
    return (
        <>
            <section className='comments'>
                <form id="comments__form">
                    <div className='comments__div'>
                        <article>
                            <div className="comments__icon"></div>
                        </article>
                        <article className="comments__inputs">
                            <p className='comments__title'>JOIN THE CONVERSATION</p>
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

export default CommentsInput