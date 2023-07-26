import './NewComments.scss'

function NewComments() {
    return (
        <>
            <section className="new-comments">
                <article className='new-comments__left'>
                    <div className="new-comments__logo"></div>
                </article>
                <article className='new-comments__right'>
                    <div className='new-comments__card'>
                        <h3 className='new-comments__tittle'>Connor Walton</h3>
                        <h4 className='new-comments__date'>02/17/2021</h4>
                        <p className='new-comments__text'>
                            This is art. This is inexplicable magic expressed in the purest
                            way, everything that makes up this majestic work deserves
                            reverence. Let us appreciate this for what it is and what it
                            contains.
                        </p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default NewComments