import './Comments.scss'

function Comments() {
    return (
        <>
            <section className="comments">
                <h2 className='comments__titte'>JOIN THE CONVERSATION</h2>
                <form id="comments__form">
                    <div className='comments__div'>
                        <article>
                            <div className="comments__icon"></div>
                        </article>
                        <article className="comments__inputs">
                            <label>
                                NAME
                                <input
                                    type="text"
                                    name="commentorName"
                                    placeholder="Enter your name"
                                    className='comments__text'
                                    required
                                />
                            </label>
                            <label htmlFor="comments__textarea">COMMENT</label>
                            <textarea
                                name="commentInput"
                                id="comments__textarea"
                                placeholder="Add a new comment"
                                required
                            ></textarea>
                            <button type="submit">COMMENT</button>
                        </article>
                    </div>
                </form>
                <section id="new-comments">
                    <article>
                        <div className="new-comments__logo"></div>
                        <div>
                            <h3>Connor Walton</h3>
                            <h4>02/17/2021</h4>
                            <p>
                                This is art. This is inexplicable magic expressed in the purest
                                way, everything that makes up this majestic work deserves
                                reverence. Let us appreciate this for what it is and what it
                                contains.
                            </p>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}

export default Comments