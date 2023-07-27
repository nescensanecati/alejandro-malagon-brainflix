import './Hero.scss'
import VideoDisplayedId from './VideoDisplayedId'

function Hero() {
    return (
        <>
            <div className="hero">
                <video controls className="hero__video" poster={VideoDisplayedId.image}>
                    <source src="https://project-2-api.herokuapp.com/stream?api_key=70548381-e8ab-48c9-956a-01909c08634f" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Hero