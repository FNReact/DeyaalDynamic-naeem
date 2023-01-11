import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import subBanner from '../../asset/image/subBanner.png'

const SubBanner = () =>{
    return(
        <Fragment>
            <Container>
                <div className="subBanner">
                     <img src={subBanner} alt="" />
                </div>
            </Container>
        </Fragment>
    )
}
export default  SubBanner;