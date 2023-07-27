import './NewComments.scss'
import VideoDisplayedId from './VideoDisplayedId'

const tempComments = VideoDisplayedId.comments;

function NewComments() {
    return (
        <>
            <section className="new-comments">
                {tempComments.map((tempCommentArray) => {
                let tempCommentsDate = new Date(tempCommentArray.timestamp).toLocaleDateString();
                return (
                    <div className='new-comments__row'>
                <article className='new-comments__left'>
                    <div className="new-comments__logo"></div>
                </article>
                <article className='new-comments__right'>
                    
                        <div className='new-comments__card'>
                            <h3 className='new-comments__tittle'>{tempCommentArray.name}</h3>
                            <h4 className='new-comments__date'>{tempCommentsDate}</h4>
                            <p className='new-comments__text'>{tempCommentArray.comment}</p>
                        </div>
                    
                </article></div>)})}
            </section>
        </>
    )
}

export default NewComments