import React, {useState} from 'react'
import image2 from '../../../images/image2.jpg';
import {FiMenu} from 'react-icons/fi'
import {FaTimes} from 'react-icons/fa'

const Mainmenu = () => {
    const [show1, setShow] = useState('none');
    const [showicon1, setShowicon1] = useState('block');
    const [showicon2, setShowicon2] = useState('none');
    const showMenu = () => {
        setShow("block");
        setShowicon1("none");
        setShowicon2("block");
    }
    const hideMenu = () => {
        setShow("none");
        setShowicon1("block")
        setShowicon2("none")
    }
    return (
        <div className="menumain">
            <div className="menu1">
                <ul>
                    <li>All categories</li>
                    <li>Vegetables</li>
                    <li>Fruits</li>
                    <li>Juices</li>
                    <li>Pet food</li>
                    <li>Spices</li>
                    <li>Diary products</li>
                    <li>Cereals</li>
                </ul>
            </div>
            <div className="menu3" style={{display: show1}}>
                <ul>
                    <li>All categories</li>
                    <li>Vegetables</li>
                    <li>Fruits</li>
                    <li>Juices</li>
                    <li>Pet food</li>
                    <li>Spices</li>
                    <li>Diary products</li>
                    <li>Cereals</li>
                </ul>
            </div>
                <div className="itemsicon">
                    <FiMenu color="black" size="20" onClick={showMenu} style={{display: showicon1}}/>
                    <FaTimes color="black" size="20" onClick={hideMenu} style={{display: showicon2}}/>
                </div>
            <div className="imagecover">
                <img src={image2} alt="Logo" 
                    width="100%"
                    height="300px"
                    />
            </div>
        </div>
    )
}

export default Mainmenu
