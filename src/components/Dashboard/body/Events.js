import React from 'react'
import image2 from '../../../images/image2.jpg';
const Events = () => {
    return (
        <div>
            <div className="offersheader">
                <h5>Events</h5>
            </div>
            <div className="eventmainbox">
            <div className="topevents">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlayevent">
                    <div className="eventtext">Attend</div>
                </div>
            </div>
            <div className="topevents">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlayevent">
                    <div className="eventtext">Attend</div>
                </div>
            </div>
            <div className="topevents">
                <img src={image2} alt="Avatar" className="image" />
                <div className="overlayevent">
                    <div className="eventtext">Attend</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Events
