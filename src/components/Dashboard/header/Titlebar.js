import React from 'react'
import image1 from '../../../images/image1.jpg';
import {FiMenu} from 'react-icons/fi'
import {MdEvent, MdAddShoppingCart} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
import {AiFillShop} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'
import $ from 'jquery';

const Titlebar = () => {
    $(window).scroll(function(e){ 
        //this sets the navbar fixed on scroll
        var $el = $('.titlebar'); 
        var isPositionFixed = ($el.css('position') === 'fixed');
        if ($(this).scrollTop() > 150 && !isPositionFixed){ 
          $el.css({'position': 'fixed', 'top': '0px'}); 
        }
        if ($(this).scrollTop() < 150 && isPositionFixed){
          $el.css({'position': 'static', 'top': '0px'}); 
        } 
      });
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
                    <li>New</li>
                </ul>
            </div>
            <div className="myicons">
                <ul>
                    <li><MdEvent color="black" size="20" /></li>
                    <li><FcAbout color="black" size="20" /></li>
                    <li><AiFillShop color="black" size="20" /></li>
                    <li><MdAddShoppingCart color="black" size="20" /></li>
                </ul>
            </div>
            <div className="mymenuicon">
                <FiMenu color="black" size="30"/>
            </div>
            <div className="telephonehere">
                <a href="tel:0706083697"> 
                    <FiPhoneCall color="#000000" size="20" /> 
                    <span className="getus">0706083697</span>
                </a>
            </div>
            <div className="emailhere">
                <div>
                    <a href="mailto: eleazarsimba5@gmail.com">
                        <GoMail color="#000000" size="20" className="addressin" /> 
                        <span className="getus">eleazarsimba5@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Titlebar
