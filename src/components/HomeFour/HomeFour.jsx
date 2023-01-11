import React, { Fragment } from "react";
import { Container,Row,Col  } from "react-bootstrap";
import ContentLayoutFour from "../ContentLayout/ContentLayoutFour";


const HomeFour = () =>{
    return(
        <Fragment>
            <Container>
                <div className="homeFour">
                   <Row>
                     <Col lg={4}>
                        <div className="heading_title">
                            <h4> শিক্ষা </h4>
                        </div>
                        <ContentLayoutFour/> 
                     </Col>
                     <Col lg={4}>
                        <div className="heading_title">
                            <h4> বিনোদন </h4>
                        </div>
                        <ContentLayoutFour/> 
                     </Col>
                     <Col lg={4}>
                        <div className="heading_title">
                            <h4> বিজ্ঞান প্রযুক্তি </h4>
                        </div>
                        <ContentLayoutFour/> 
                     </Col>
                   </Row> 
                </div>
            </Container>
        </Fragment>
    )
}
export default  HomeFour;