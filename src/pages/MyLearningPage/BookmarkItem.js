import React from "react";

const BookmarkItem = () => {
    return (<div className="course-list-item flex justify-between items-center bg-white max-w-7xl w-full p-5 rounded-xl"> 
    <div className="status-identity flex w-full gap-3">
        <div className="percentage img_gray_bg_color h-36 max-w-xs w-full flex items-center justify-center rounded-xl">

        </div>
        <div className="course-identity flex flex-col gap-1 justify-between py-1">
            <h2 className="font-bold text-l">The Complete JavaScript Course 2023: From Zero to Expert!</h2>
            <div className="teacher flex items-center gap-2">
                <img src="8.png" alt=""></img>
                <p className="font-light">by Tao Xu</p>
            </div>
            <div className="star-group flex items-center">
                <p className="text-20 font-bold">4.5</p>
                <img src="icons/star_full.svg" className="w-5 ml-1" alt=""></img>
                <img src="icons/star_full.svg" className="w-5" alt=""></img>
                <img src="icons/star_full.svg" className="w-5" alt=""></img>
                <img src="icons/star_full.svg" className="w-5" alt=""></img>
                <img src="icons/star.svg" className="w-5 mr-1" alt=""></img>
                <h3 className="text-20">2981</h3>
            </div>
        </div>
    </div>
    <div className="button-container flex self-end gap-2">
        <button className="border-solid border-2 border-color-mid rounded-2xl text-[#3f72af] py-1 px-2">Enrolls<span className="text-white">.</span>Me!</button>
        <button className="border-solid border-2 btn-danger rounded-2xl text-white py-1 px-7 flex justify-center"><img src="icons/delete.svg" alt=""></img>Delete</button>
    </div>
</div>);
}

export default BookmarkItem;