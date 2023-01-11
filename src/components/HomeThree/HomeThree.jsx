import {  faCaretRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentLayoutOne from "../ContentLayout/ContentLayoutOne";

const HomeThree = () =>{
    return(
        <Fragment>
            <Container>
                <div className="homeThree">
                      <div className="heading_title">
                           <h4> সাম্প্রতিক আলাপ </h4>
                      </div>  
                      <Row>
                         <Col lg={8}>
                            <ContentLayoutOne/>
                         </Col>
                         <Col lg={4}>
                            <div className="sahitto_links">
                                <ul>
                                    <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/> মজনু শাহ’র দুটি কবিতা </Link></li>
                                    <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  নীতুর লিপস্টিক </Link> </li>
                                    <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  ইনিসীর কবিতা </Link> </li>
                                    <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  এ গ্লোবাল ট্রেন ( ১ ) </Link> </li>
                                    <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  আমার কাদির দর্শন </Link> </li>
                                    <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  মারুফ বরকতের কবিতা </Link> </li>
                                    <li> <Link to="/">  আরো পড়ুন  <FontAwesomeIcon icon={faCaretRight}/>  </Link> </li>
                                </ul>
                            </div>
                         </Col>
                      </Row>
                </div>
            </Container>
        </Fragment>
    )
}
export default  HomeThree;