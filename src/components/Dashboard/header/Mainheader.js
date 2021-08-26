import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {BiCart} from 'react-icons/bi'
import {VscAccount} from 'react-icons/vsc'
const Mainheader = () => {
    return (
        <div className="topheaderbar">
            <div className="offers">
                <p>Today's Offers!!</p>
            </div>
            <div className="searchhere">
                <form>
                    <input type="text" id="filter" placeholder="Search for..." />
                    <button><FaSearch color="white"/></button>
                </form>
                <div className="viewcart">
                    <p>View your Cart</p>
                    <BiCart color="white" size="20" style={{paddingTop:'5px'}}/>
                </div>
                <div className="account">
                    <VscAccount color="white" size="20" />
                </div>
            </div>
            <div className="contactus">
                <p>Contact Us</p>
            </div>
        </div>
    )
}

export default Mainheader
