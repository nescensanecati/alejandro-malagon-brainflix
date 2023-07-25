import './Hero.scss'

function Hero() {
    return (
        <>  
            <div className="hero">
            <video controls className="hero__video" poster='https://i.imgur.com/l2Xfgpl.jpg'>
                <source src="https://project-2-api.herokuapp.com/stream?api_key=70548381-e8ab-48c9-956a-01909c08634f" type="video/mp4" />
            </video>
            </div>
        </>
    )
}

export default Hero