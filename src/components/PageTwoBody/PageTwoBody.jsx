import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentLayoutOne from "../ContentLayout/ContentLayoutOne";
import ContentLayoutThree from "../ContentLayout/ContentLayoutThree";
import ContentLayoutTwo from "../ContentLayout/ContentLayoutTwo";


const PageTwoBody = () =>{
    return(
        <Fragment>
            <Container>
                <div className="PageTwoBody">
                    <Row>
                        <Col lg={9}>
                            <div className="heading_title">
                                <h4> সাম্প্রতিক আলাপ </h4>
                            </div>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                            <ContentLayoutOne/>
                        </Col>
                        <Col lg={3}>
                            <div className="heading_title">
                                <h4> সাক্ষাৎকার </h4>
                            </div>
                            <ContentLayoutTwo/>
                            <div className="heading_title mt-4">
                                <h4> জনপ্রিয় </h4>
                            </div>
                            <ContentLayoutThree/>
                            <ContentLayoutThree/>
                            <ContentLayoutThree/>
                            <ContentLayoutThree/>
                            
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
export default  PageTwoBody;