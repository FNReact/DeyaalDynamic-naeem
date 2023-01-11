import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentLayoutFive from "../ContentLayout/ContentLayoutFive";
import ContentLayoutOne from "../ContentLayout/ContentLayoutOne";
import ContentLayoutThree from "../ContentLayout/ContentLayoutThree";
import ContentLayoutTwo from "../ContentLayout/ContentLayoutTwo";


const HomeOne = () =>{
    return(
        <Fragment>
            <Container>
                <div className="homeOne">
                    <Row>
                        <Col lg={9}>
                            <div className="heading_title">
                                <h4> সাম্প্রতিক আলাপ </h4>
                            </div>
                            <ContentLayoutFive/>
                            <Row>
                                <Col lg={4}>
                                    <ContentLayoutTwo/>
                                </Col>
                                <Col lg={4}>
                                    <ContentLayoutTwo/>
                                </Col>
                                <Col lg={4}>
                                    <ContentLayoutTwo/>
                                </Col>
                                <Col lg={4}>
                                    <ContentLayoutTwo/>
                                </Col>
                                <Col lg={4}>
                                    <ContentLayoutTwo/>
                                </Col>
                                <Col lg={4}>
                                    <ContentLayoutTwo/>
                                </Col>
                            </Row>
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
                            <ContentLayoutThree/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
export default  HomeOne;