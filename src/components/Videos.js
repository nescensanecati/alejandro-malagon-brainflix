import './Videos.scss'

function Videos() {
    return (
        <>
            <section className='videos'>
                <h2>NEXT VIDEOS</h2>
                <div className='videos__card-1'>
                    <img alt='' src='https://i.imgur.com/5qyCZrD.jpg' className='videos__image-1'></img>
                    <article className='videos__description'>
                        <h3 className='videos__tittle'>Become A Travel Pro in One Easy Lesson</h3>
                        <p className='videos__author'>Todd Welch</p>
                    </article>
                </div>
                <div className='videos__card-2'>
                    <img alt='' src='https://i.imgur.com/yFS8EBr.jpg' className='videos__image-2'></img>
                    <article className='videos__description'>
                        <h3 className='videos__tittle'>Les Houches The Hidden Gem Of The Chamonix</h3>
                        <p className='videos__author'>Cornelia Blair</p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Videos