import React from 'react'
import image1 from '../../../images/image1.jpg';
import {FiMenu} from 'react-icons/fi'
import {MdEvent} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
import {AiFillShop} from 'react-icons/ai'
import {GrServices} from 'react-icons/gr'

const Titlebar = () => {
    return (
        <div className="titlebar">
            <div className="mylogo">
                <img src={image1} alt="Logo" 
                width="50px"
                height="50px"
                />
                <p>STORE</p>
            </div>
            <div className="mymenu">
                <ul>
                    <li>Events</li>
                    <li>About us</li>
                    <li>Best deals</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="myicons">
                <ul>
                    <li><MdEvent color="black" size="20" /></li>
                    <li><FcAbout color="black" size="20" /></li>
                    <li><AiFillShop color="black" size="20" /></li>
                    <li><GrServices color="black" size="20" /></li>
                </ul>
            </div>
            <div className="mymenuicon">
                <FiMenu color="black" size="30"/>
            </div>
        </div>
    )
}

export default Titlebar
