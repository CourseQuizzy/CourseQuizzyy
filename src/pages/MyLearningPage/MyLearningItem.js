import React from "react";
import { Link } from "react-router-dom";

const MyLearningItem = ({completed, ranked}) => {
    return(
        <> {ranked ? (<div className="course-list-item flex justify-end items-center"> 
        <div className="status-identity flex w-full gap-3 bg-white p-5 rounded-xl">
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
        <Link to="#" className="completed flex flex-col items-center gap-1 w-1/6">
            <div className="flex flex-col items-center">
                <img src="icons/workspace_premium.svg" alt=""></img>
                <h1 className="text-l font-bold text-center courseQuizzy">View Certificate</h1>
                <div className="star-group flex">
                    <img src="icons/star_full.svg" className="w-4" alt=""></img>
                    <img src="icons/star_full.svg" className="w-4" alt=""></img>
                    <img src="icons/star_full.svg" className="w-4" alt=""></img>
                    <img src="icons/star_full.svg" className="w-4" alt=""></img>
                    <img src="icons/star.svg" className="w-4" alt=""></img>
                    <p className="text-sm">(4.5)</p>
                </div>
            </div>
        </Link>
    </div>) : completed ? (<div className="course-list-item flex justify-end items-center"> 
        <div className="status-identity flex w-full gap-3 bg-white p-5 rounded-xl">
            <div className="percentage img_gray_bg_color h-36 max-w-xs w-full flex items-center justify-center rounded-xl">
                25%
            </div>
            <div className="course-identity flex flex-col gap-1 w-full">
                <p className="mb-2">Enrolled in 8-10-2023</p>
                <h2 className="font-bold">The Complete JavaScript Course 2023: From Zero to Expert!</h2>
                <div className="teacher flex items-center gap-2">
                    <img src="8.png" alt=""></img>
                    <p className="font-light">by Tao Xu</p>
                </div>
                <button className="border-solid border-2 border-color-mid rounded-2xl text-[#3f72af] py-1 px-2 self-end">Add<span className="text-white">.</span>Review</button>
            </div>
        </div>
        <Link to="#" className="completed flex flex-col items-center gap-1 w-1/6">
            <div className="flex flex-col items-center">
                <img src="icons/workspace_premium.svg" alt=""></img>
                <h1 className="text-l font-bold text-center courseQuizzy">View Certificate</h1>
            </div>
        </Link>
    </div>) : <div className="course-list-item flex justify-between items-center bg-white max-w-7xl w-full p-5 rounded-xl"> 
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
            <Link to="#" className="">
                <div className="next flex flex-col items-center gap-4">
                    <img src="icons/arrow_forward_ios.svg" alt=""></img>
                    Continue
                </div>
            </Link>
        </div>}
            
        </>
        
    );
}

export default MyLearningItem;