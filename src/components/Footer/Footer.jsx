import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../../asset/image/logo.png'

const Footer = (props) =>{
    const {user} = props
    const logoUrl = "https:lemmesaybd.app";

    return(
        <Fragment>
              <div className="footer">
                 <Container>
                   <div className="footer_wrapper">
                    <Row>
                        <Col lg={4}>
                           <div className="footer_wrap">
                               <div className="logo">
                                   <img src={`${logoUrl}/${user.entity_logo}`} alt="" />
                               </div>
                               <div className="hints">{user.website} </div>
                           </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer_wrap">
                                <h3> সম্পাদক </h3>
                                <h4>আবু মুস্তাফিজ</h4>
                                <h5> {user.entity_email} </h5>
                                <div className="social_icon">
                                    <h6> {user.entity_phone} </h6>
                                    <ul>
                                        <li> <i><FontAwesomeIcon icon={faFacebook}/> </i>  </li>
                                        <li> <i><FontAwesomeIcon icon={faTwitter}/> </i>  </li>
                                        <li> <i> <FontAwesomeIcon icon={faInstagram}/> </i>  </li>
                                        <li> <i> <FontAwesomeIcon icon={faYoutube}/>  </i></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer_wrap">
                                 <h3> কপিরাইট </h3>
                                 <h4>{user.entity_details}</h4>
                            </div>
                        </Col>
                    </Row> 
                   </div>
                </Container> 
                <div className="copy_right">
                    <Container>
                        <div className="copyRight_wrapper">
                            <div className="copyright_left">
                               © All Rights Reserved, <span>দেয়াল</span>
                            </div>
                            <div className="copyright_right">
                            Terms & Conditions • Privacy© 
                            </div>
                        </div>
                    </Container>
                </div>    
              </div>
        </Fragment>
    )
}
export default  Footer;