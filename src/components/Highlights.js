import './Highlights.scss'

function Highlights() {
    return (
        <>
                <section className='highlights'>
                    <h2 className='highlights__tittle'>BMX Rampage: 2021 Highlights</h2>
                    <article className='highlights__bottom-field'>
                    <div className='highlights__bottom-left'>
                    <h3 className='highlights__author'>By Red Crow</h3>
                    <p className='highlights__date'>07/11/2021</p>
                    </div>
                    <div className='highlights__bottom-right'>
                    <p className='highlights__loves'><picture className='highlights__heart'></picture>110,985</p>
                    <p className='highlights__views'><picture className='highlights__eye'></picture>1,001,023</p>
                    </div>
                    </article>
                    <p className='highlights__text'>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
                </section>
        </>
    )
}

export default Highlights