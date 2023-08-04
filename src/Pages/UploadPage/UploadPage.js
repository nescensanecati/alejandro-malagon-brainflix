import './UploadPage.scss'
import publishIcon from '../../Assets/Images/publish.svg'
import uploadImg from '../../Assets/Images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'


function UploadPage() {
    function handleSubmitClick () {
        alert ('Video was uploaded')
    }
    return (
        <>
            <section className='upload'>
                <h1 className='upload__h1'>Upload Video</h1>
                <div className='upload__content'>
                <article className='upload__section'>
                <h2 className='upload__h2'>VIDEO THUMBNAIL</h2>
                <img className='upload__img' src={uploadImg} alt=''></img>
                </article>
                <article className='upload__section'>
                <h2 className='upload__h2'>TITLE YOUR VIDEO</h2>
                <textarea
                    className='upload__title'
                    name='uploadTitle'
                    placeholder='Add a title to your video'
                    required
                    rows='1'
                ></textarea>
                <h2 className='upload__h2'>ADD A DESCRIPTION</h2>
                <textarea
                    className='upload__description'
                    name='uploadDescription'
                    placeholder='Add a description to your video'
                    required
                    rows='5'></textarea>
                </article>
                </div>
                <div className='upload__bottom'>
                <Link className='upload__link'  to={`/`}><button className='upload__send' type='upload' onClick={handleSubmitClick}><img src={publishIcon} alt='' className='upload__publish-img'></img>PUBLISH</button></Link>
                <button className='upload__cancel' type='cancel'>CANCEL</button>
                </div>
            </section>
        </>
    );
}

export default UploadPage;