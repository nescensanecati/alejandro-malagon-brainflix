import './CommentsView.scss'
import CommentsInput from '../CommentsInput/CommentsInput.js'
import CommentsList from '../CommentsList/CommentsList'
import Highlights from '../Highlights/Highlights'

function Comments({selectedVideoDetails}) {
    return (
        <>
            <section className='comments-view'>
            <Highlights selectedVideoDetails={selectedVideoDetails}/>
            <CommentsInput/>
            <CommentsList selectedVideoDetailsComments={selectedVideoDetails.comments}/>
            </section>
        </>
    )
}

export default Comments