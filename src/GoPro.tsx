
import trophy from './assets/trophy.png';
const GoPro = () => {
    return (
        <>
            <div className='go-pro-container'>
                <div className="go-pro-content-container">
                    <div className="go-pro-content">
                        <img className='' src={trophy} alt="" />
                        <span className='go-pro-text'>Go Pro Upgrade Now</span>
                    </div>
                </div>
                <div className='go-pro-price-container'> <p className='go-pro-price'>$1</p></div>
           </div>
        </>
    )
}

export default GoPro