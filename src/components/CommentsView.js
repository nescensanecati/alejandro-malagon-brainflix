import './CommentsView.scss'
import Comments from './Comments'
import Highlights from './Highlights'
import NewComments from './NewComments'

function CommentsView() {
    return (
        <>
            <section className='comments-view'>
                <Highlights />
                <Comments />
                <NewComments />
            </section>
        </>
    )
}

export default CommentsView