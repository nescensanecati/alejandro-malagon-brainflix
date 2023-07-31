import './UploadPage.scss'
import publishIcon from '../Assets/Images/publish.svg'
import uploadImg from '../Assets/Images/Upload-video-preview.jpg'


function UploadPage() {
    return (
        <>
            <section className='upload'>
                <h1 className='upload__h1'>Upload Video</h1>
                <h2 className='upload__h2'>VIDEO THUMBNAIL</h2>
                <img className='upload__img' src={uploadImg} alt=''></img>
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
                <div className='upload__bottom'>
                <button className='upload__send' type='upload'><img src={publishIcon} alt='' className='upload__publish-img'></img>PUBLISH</button>
                <button className='upload__cancel' type='cancel'>CANCEL</button>
                </div>
            </section>
        </>
    );
}

export default UploadPage;