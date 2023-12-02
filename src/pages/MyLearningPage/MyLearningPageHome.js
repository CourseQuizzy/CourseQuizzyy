import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import CourseItem from "./CourseItem";

const MyLearningPageHome = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#F2F7FF'; 
      });
    
    return (
        <div className="pt-20">
            <Navbar logined/>
            <div className="container">
                <Sidebar />
                <div className="course pl-80 pr-10 flex flex-col gap-8">
                    <h1 className="text-2xl font-bold">My Course</h1>
                    <div className="filter-search flex w-full justify-between gap-5">
                        <div className="filter flex bg-white p-2 w-full justify-between rounded-xl items-center">
                            <p>Total of <span className="mid_courseQuizzy">21</span> courses enrolled</p>
                            <div className="filter-menu flex gap-2 items-center">
                                <p>Sort by: </p>
                                <select className="border-solid border-2 border-color-mid rounded-xl p-1" name="cars" id="cars">
                                    <option value="volvo">Ongoing</option>
                                    <option value="saab">Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="search flex gap-2 w-1/2">
                            <input placeholder="Search" className="px-2 w-full rounded-xl"></input>
                            <button className="bg_mid_courseQuizzy px-3 rounded-xl"><img src="icons/search.svg" alt=""></img></button>
                        </div>
                    </div>
                    <div className="course-list flex flex-col gap-4">
                        <CourseItem completed/>
                        <CourseItem />
                        <CourseItem />
                        <CourseItem completed/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyLearningPageHome;