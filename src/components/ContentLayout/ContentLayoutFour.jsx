import { faCaretRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import demo1 from '../../asset/image/demo1.jpg'

const ContentLayoutFour = () =>{
    return(
        <Fragment>
            <Link to="/detail">
             <div className="layout_four">
                <div className="layout_four_img">
                    <img src={demo1} alt="" />
                </div>
                <div className="layout_four_bottom">
                    <div className="content_name">
                         দ্রাবিড় হাসান খান
                    </div>
                    <div className="content_titile">
                        পলিটিক্যাল ইকোনোমি বুঝতে হলে
                    </div>
                    <div className="content_text">
                    একটা সাজেশন দেই, ভবিষ্যতের পলিটিক্যাল ইকোনমি বুঝতে গেলে শুধু ইংরেজি কিতাব আর ম্যাথ জানলে হবে না।আপনারে ম্যাথ কে    সহজ ভাষা আর expression এ কনভার্ট করতে হবে। কেমনে করবেন ?
                    </div>
                    <div className="sahitto_links">
                            <ul>
                                <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/> মজনু শাহ’র দুটি কবিতা </Link></li>
                                <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  নীতুর লিপস্টিক </Link> </li>
                                <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  ইনিসীর কবিতা </Link> </li>
                                <li> <Link to="/"> <FontAwesomeIcon icon={faChevronRight}/>  এ গ্লোবাল ট্রেন ( ১ ) </Link> </li>
                                <li> <Link to="/">  আরো পড়ুন  <FontAwesomeIcon icon={faCaretRight}/>  </Link> </li>
                            </ul>
                    </div>
                </div>
             </div>
            </Link>
        </Fragment>
    )
}
export default  ContentLayoutFour;