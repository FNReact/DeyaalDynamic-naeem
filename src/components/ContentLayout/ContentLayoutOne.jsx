import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import demo1 from '../../asset/image/demo1.jpg'

const ContentLayoutOne = () =>{
    return(
        <Fragment>
          <Link to="/detail">
            <div className="layout_one">
                <div className="layout_one_img">
                    <img src={demo1} alt="" />
                </div>
                <div className="layout_one_right">
                    <div className="content_name">
                         দ্রাবিড় হাসান খান
                    </div>
                    <div className="content_titile">
                        পলিটিক্যাল ইকোনোমি বুঝতে হলে
                    </div>
                    <div className="content_text">
                    একটা সাজেশন দেই, ভবিষ্যতের পলিটিক্যাল ইকোনমি বুঝতে গেলে শুধু ইংরেজি কিতাব আর ম্যাথ জানলে হবে না।আপনারে ম্যাথ কে    সহজ ভাষা আর expression এ কনভার্ট করতে হবে। কেমনে করবেন ? কোডিং/ প্রোগ্রামিং এর মাধ্য
                    </div>
                </div>
            </div>
           </Link>
        </Fragment>
    )
}
export default  ContentLayoutOne;