import React from "react";
import { Link } from "react-router-dom";

const CourseItem = () => {
    return(
        <div className="course-list-item bg-white max-w-7xl w-full p-5 rounded-xl">
            <Link to="#" className="flex justify-between items-center">
                <div className="status-identity flex w-full gap-3">
                    <div className="percentage img_gray_bg_color h-36 max-w-xs w-full flex items-center justify-center rounded-xl">
                        25%
                    </div>
                    <div className="course-identity flex flex-col gap-1">
                        <p className="mb-2">Enrolled in 8-10-2023</p>
                        <h2 className="font-bold">The Complete JavaScript Course 2023: From Zero to Expert!</h2>
                        <div className="teacher flex items-center gap-2">
                            <img src="8.png" alt=""></img>
                            <p className="font-light">by Tao Xu</p>
                        </div>
                    </div>
                </div>
                <div className="next flex flex-col items-center gap-4">
                    <img src="icons/arrow_forward_ios.svg" alt=""></img>
                    Continue
                </div>
            </Link>
        </div>
    );
}

export default CourseItem;