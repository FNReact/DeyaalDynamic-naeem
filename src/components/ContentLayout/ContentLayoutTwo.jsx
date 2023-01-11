import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import demo2 from '../../asset/image/demo2.jpg'

const ContentLayoutTwo = () =>{
    return(
        <Fragment>
           <Link to="detail">
            <div className="layout_two">
                <div className="layout_two_img">
                    <img src={demo2} alt="" />
                </div>
                <div className="layout_two_bottom">
                    <div className="content_name">
                         দ্রাবিড় হাসান খান
                    </div>
                    <div className="content_titile">
                        পলিটিক্যাল ইকোনোমি বুঝতে হলে
                    </div>
                    <div className="content_text">
                    একটা সাজেশন দেই, ভবিষ্যতের পলিটিক্যাল ইকোনমি বুঝতে গেলে শুধু ইংরেজি কিতাব আর ম্যাথ জানলে হবে না।আপনারে ম্যাথ কে    সহজ ভাষা আর expression এ কনভার্ট করতে হবে। কেমনে করবেন ?
                    </div>
                </div>
            </div>
           </Link>
        </Fragment>
    )
}
export default  ContentLayoutTwo;