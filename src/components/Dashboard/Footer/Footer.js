import React, {useState} from 'react'
import {FaChevronRight} from 'react-icons/fa'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {TiSocialTwitterCircular, TiSocialGooglePlusCircular, TiSocialInstagram, TiSocialLinkedinCircular} from 'react-icons/ti'
import {FaCcPaypal, FaCcVisa, FaCcMastercard} from 'react-icons/fa'
import axios from 'axios'
import { Form } from 'react-bootstrap';

const Footer = () => {
        const [data, setData] = useState({
            email: "",
        })
        
        const handleChange = (e) =>{
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
        }
        const subScribewithUs = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/theuser/register',{
            //set new values
            email: data.email,  
        })
        .then(function (response) {
            // handle success
            alert(response.data);
            // setData(response.data.users)            
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data);
            alert(error.response.data)
        })
    }
    return (
        <div>
            <div id="footerheader">
                <p>Sign Up For Our Newslettter</p>
                <Form onSubmit={subScribewithUs}>
                    <div id="subscribebutton">
                        <input type="email" placeholder="Email" id="email" onChange={handleChange} required/>
                        <button>SUBSCRIBE NOW</button>
                    </div>
                </Form>
            </div>

            <div className="footerbody">
                <div className="footerbodyitems">
                    <div className="footeritems">
                        <h5>INFORAMTION</h5>
                        <p><FaChevronRight />Events</p>
                        <p><FaChevronRight />About Us</p>
                        <p><FaChevronRight />Best Deals</p>
                        <p><FaChevronRight />Services</p>
                        <p><FaChevronRight />Short Codes</p>
                    </div>
                    <div className="footeritems">
                        <h5>POLICY INFO</h5>
                        <p><FaChevronRight />FAQ</p>
                        <p><FaChevronRight />Privacy Policy</p>
                        <p><FaChevronRight />Terms Of Use</p>
                    </div>
                    <div className="footeritems">
                        <h5>WHAT IN STORES</h5>
                        <p><FaChevronRight />Pet Food</p>
                        <p><FaChevronRight />Frozen Snacks</p>
                        <p><FaChevronRight />Kitchen</p>
                        <p><FaChevronRight />Branded Foods</p>
                        <p><FaChevronRight />Households</p>
                    </div>
                    <div className="footeritems">
                        <h5>TWITTER POSTS</h5>
                        <p><span className="twitterposts">01 day ago</span></p>
                        <p><span className="twitterposts">02 day ago</span></p>
                    </div>
                </div>

                <div className="footersubbody">
                    <div className="paymentfooter">
                        <p>100% Secure Payments</p>
                        <div className="socialicons">
                            <FaCcVisa color="orange" size="25" />
                            <FaCcPaypal color="blue" size="25" />
                            <FaCcMastercard color="red" size="25" />
                        </div>
                    </div>
                    <div className="connectfooter">
                        <p>Connect With Us</p>
                        <div className="socialicons">
                            <RiFacebookCircleLine color="white" size="25" />
                            <TiSocialTwitterCircular color="white" size="25" />
                            <TiSocialGooglePlusCircular color="white" size="25" />
                            <TiSocialInstagram color="white" size="25" />
                            <TiSocialLinkedinCircular color="white" size="25" />
                        </div>
                    </div>
                </div>

                <hr className="footerlinebreak"/>
                <div className="copyright">
                    <p>&#169; Copyright 2010-{new Date().getFullYear()},
                        Grocery Store. All rights reserved | Design by <a href="mailto: eleazarsimba5@gmail.com">Eleazar</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
