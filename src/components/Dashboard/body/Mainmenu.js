import React from 'react'
import image2 from '../../../images/image2.jpg';
import {FiMenu} from 'react-icons/fi'

const Mainmenu = () => {
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
                <div className="itemsicon">
                    <FiMenu color="black" size="20"/>
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
