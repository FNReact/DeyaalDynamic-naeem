import React, { Fragment, useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/style.css";
import "../../asset/css/responsive.css";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../asset/image/logo.png'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TopNaviation = (props) => {
    const [stickyNav, setStickyNav] = useState(false);
    const {user} = props
    const logoUrl = "https:lemmesaybd.app";
    console.log(user)

    useEffect(() => {
        window.onscroll = () => {
          setStickyNav(window.pageYOffset === 0 ? false : true);
          return () => (window.onscroll = null);
        };
      }, []);

return (
  <Fragment>
    <title>{props.title}</title>
        <header >
        <div className="header_top">
            <div className="container">
                <div className="headerTop_wrapper">
                    <div className="headerTop_left"> {user.location} </div>
                    <div className="headerTop_right"> 
                         <div className="text_1"> পরীক্ষামূলক প্রচার</div> 
                         <div className="text_2"> {user.updated_at} </div> 
                    </div>
                </div>
            </div>
        </div>
                                          
        <div className={` header_menu ${stickyNav ? 'HeaderSticky' : ''} }`}>
            <div className="container">
                  <div className="manu_wrapper">
                    <Link to="/" className="logo">
                       <img src={`${logoUrl}/${user.entity_logo}`} alt="" />
                    </Link>
                         <ul className="nav_list">
                              <li><Link to="/page-two"> {user.name} </Link></li> 
                              <li><Link to="/page-two"> সাহিত্য </Link></li>
                              <li><Link to="/page-two"> বিজ্ঞান প্রযুক্তি </Link></li>
                              <li><a>  অন্যান্য <i><FontAwesomeIcon icon={faCaretDown}/> </i>
                                  <span className="droppper" ></span></a>
                                    <div className="sub_down">
                                       <li> <Link to="/page-two"> বিনোদন </Link> </li>
                                       <li> <Link to="/page-two"> সাক্ষাৎকার </Link> </li>
                                       <li> <Link to="/page-two"> ধর্ম </Link> </li>
                                       <li> <Link to="/page-two"> স্বাস্থ্য </Link> </li>
                                       <li> <Link to="/page-two"> শিক্ষা </Link> </li>
                                       <li> <Link to="/page-two"> দর্শন </Link> </li>
                                       <li> <Link to="/page-two"> রিভিউ </Link> </li>
                                       <li> <Link to="/page-two"> প্রতিবেদন </Link> </li>
                                       <li> <Link to="/page-two"> ফিচার </Link> </li>
                                    </div>
                              </li>
                          </ul> 
                     </div>
                  </div>
             </div>
        </header>
  </Fragment>
)
}

export default TopNaviation