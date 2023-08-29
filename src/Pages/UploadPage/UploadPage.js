import './UploadPage.scss'
import publishIcon from '../../Assets/Images/publish.svg'
import { useState } from "react";
import axios from 'axios';
// import UploadPageComponent from '../../Components/UploadPage/UploadPage'


function UploadPage() {
    const [uploadTitle, setUploadTitle] = useState('');
    const [uploadDescription, setuploadDescription] = useState('');

    const handleTitleChange = (e) => {
        setUploadTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setuploadDescription(e.target.value);
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();

        const jsonSendToApi = {
            "title" : uploadTitle,
            "description" : uploadDescription
        }
        axios.post ('https://database-backend-brainstation-70fdd396b787.herokuapp.com/videos', jsonSendToApi)
        .then(
            response => {
                console.log('Video was uploaded with HTTP code: ' + response.status + ', and message:' + response.statusText);
                alert('Video was uploaded')
                window.location.replace("/");
            }
        )
        .catch(error => {
            console.log("error calling axios", error);
        })

    }

    const handleCancelClick = (e) => {
        window.location.replace("/");
    }


    return (
        <>
            <section className='upload'>
                <h1 className='upload__h1'>Upload Video</h1>
                <form onSubmit={handleSubmitClick}>
                    <div className='upload__content'>
                        <article className='upload__section'>
                            <h2 className='upload__h2'>VIDEO THUMBNAIL</h2>
                            <img className='upload__img' src='https://database-backend-brainstation-70fdd396b787.herokuapp.com/images/140555ee-1481-4501-b0d1-f0775637a8dd' alt='Person view of riding bike on a street '></img>
                        </article>
                        <article className='upload__section'>
                            <h2 className='upload__h2'>TITLE YOUR VIDEO</h2>
                            <textarea
                                className='upload__title'
                                name='uploadTitle'
                                placeholder='Add a title to your video'
                                value={uploadTitle}
                                onChange={handleTitleChange}
                                required
                                rows='1'
                            ></textarea>
                            <h2 className='upload__h2'>ADD A DESCRIPTION</h2>
                            <textarea
                                className='upload__description'
                                name='uploadDescription'
                                placeholder='Add a description to your video'
                                value={uploadDescription}
                                onChange={handleDescriptionChange}
                                required
                                rows='5'></textarea>
                        </article>
                    </div>
                    <div className='upload__bottom'>
                        <button className='upload__send' type='submit'><img src={publishIcon} alt='Publish icon for the upload button' className='upload__publish-img'></img>PUBLISH</button>
                        <button className='upload__cancel' onClick={handleCancelClick}>CANCEL</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default UploadPage;