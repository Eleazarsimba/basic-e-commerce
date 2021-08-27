import React from 'react'
import image2 from '../../../images/image2.jpg';

const Topoffers = () => {
    return (
        <div>
            <div className="offersheader">
                <h5>Best Deals</h5>
            </div>
        <div className="itemsmainbox">
            <div className="topitems">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlay">
                    <div className="text">Fresh dairy products available and delivery with 2 hrs</div>
                </div>
            </div>
            <div className="topitems">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlay">
                    <div className="text">Fresh dairy products available and delivery with 2 hrs</div>
                </div>
            </div>
            <div className="topitems">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlay">
                    <div className="text">Fresh dairy products available and delivery with 2 hrs</div>
                </div>
            </div>
            <div className="topitems">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlay">
                    <div className="text">Fresh dairy products available and delivery with 2 hrs</div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Topoffers
