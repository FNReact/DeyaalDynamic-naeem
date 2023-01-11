import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import demo3 from '../../asset/image/demo3.jpg'

const ContentLayoutThree = () =>{
    return(
        <Fragment>
            <Link to="detail">
             <div className="layout_three">
                <div className="layout_three_img">
                    <img src={demo3} alt="" />
                </div>
                <div className="layout_three_right">
                    <div className="content_titile">
                        পলিটিক্যাল ইকোনোমি বুঝতে হলে বুঝতে 
                    </div>
                </div>
             </div>
            </Link>
        </Fragment>
    )
}
export default  ContentLayoutThree;