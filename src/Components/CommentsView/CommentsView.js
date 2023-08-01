import './CommentsView.scss'
import CommentsInput from '../CommentsInput/CommentsInput.js'
import CommentsList from '../CommentsList/CommentsList'
import Highlights from '../Highlights/Highlights'

function Comments({selectedVideo}) {
    return (
        <>
            <section className='comments-view'>
            <Highlights selectedVideo={selectedVideo}/>
            <CommentsInput/>
            <CommentsList selectedVideoComments={selectedVideo.comments}/>
            </section>
        </>
    )
}

export default Comments