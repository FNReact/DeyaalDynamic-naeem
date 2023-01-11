import React, { Fragment } from "react";
import { Container,Row,Col  } from "react-bootstrap";
import ContentLayoutTwo from "../ContentLayout/ContentLayoutTwo";


const HomeTwo = () =>{
    return(
        <Fragment>
            <Container>
                <div className="homeTwo">
                    <Row>
                        <Col lg={9}>
                            <div className="Home_vedio">
                            <iframe class="embed-responsive-item vedio_iframe" width="100%" height="450" src="https://www.youtube.com/embed/8fsiYfJcFj4" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </Col>
                        <Col lg={3}>
                          <ContentLayoutTwo/>   
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
export default  HomeTwo;