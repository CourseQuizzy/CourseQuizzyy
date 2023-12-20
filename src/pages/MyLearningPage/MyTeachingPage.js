import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import SortSearch from './SortSearch';

const MyTeachingPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#F2F7FF'; 
      });
    
    return (
        <div className="pt-20">
            <Navbar logined/>
            <div className="container">
                <Sidebar />
                <div className="course pl-80 pr-10 flex flex-col gap-8 mb-8">
                    <h1 className="text-2xl font-bold">My Course</h1>
                    <SortSearch />
                    <div className="course-list flex flex-col gap-4">
                        <div className="course-stat flex gap-3">
                            <div className="courses h-72 rounded-lg font-bold bg-white p-3 w-3/5">Courses</div>
                            <div className="statistic h-72 rounded-lg font-bold p-3 bg_light_mid_courseQuizzy w-2/5">Statistic</div>
                        </div>
                        <div className="student-list-container bg-white p-3 rounded-lg flex flex-col">
                            <div className="title-filter-container flex items-center justify-between gap-9 rounded-lg">
                                <div className="title-filter flex items-center gap-9">
                                    <h2 className="font-bold">Student List</h2>
                                    <div className="filter-menu flex gap-2 items-center">
                                        <p>Sort by: </p>
                                        <select className="border-solid border-2 border-color-mid rounded-xl p-1" name="cars" id="cars">
                                            <option value="volvo">Default</option>
                                        </select>
                                    </div>
                                </div>
                                <h2 className="font-bold justify-self-center">Total 12345</h2>
                            </div>
                            <div className="table w-full mt-6 mb-4">
                                <div className="table-row-group">
                                    <div className="table-row">
                                        <div className="table-cell">Student<img src="icons/swap_vert.svg" className="inline ml-1" alt=""></img></div>
                                        <div className="table-cell">StudentID<img src="icons/swap_vert.svg" className="inline ml-1" alt=""></img></div>
                                        <div className="table-cell">Course Name<img src="icons/swap_vert.svg" className="inline ml-1" alt=""></img></div>
                                        <div className="table-cell">Date Enrolled<img src="icons/swap_vert.svg" className="inline ml-1" alt=""></img></div>
                                        <div className="table-cell">Status<img src="icons/swap_vert.svg" className="inline ml-1" alt=""></img></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="p-1 table-cell border-2 border-r-transparent border-[#dbe2ef] rounded-ss-xl rounded-es-xl"><img src="11.png" className="inline mr-2 p-1" alt=""></img>Elle Argent</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">12345</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">UI/UX Design</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">18 October, 2023</div>
                                        <div className="table-cell border-2 border-l-transparent border-[#dbe2ef] rounded-se-xl rounded-ee-xl">Completed</div>
                                    </div>
                                    <div className="h-[2.5px]"></div>
                                    <div className="table-row">
                                        <div className="p-1 table-cell border-2 border-r-transparent border-[#dbe2ef] rounded-ss-xl rounded-es-xl"><img src="11.png" className="inline mr-2 p-1" alt=""></img>Elle Argent</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">12345</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">UI/UX Design</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">18 October, 2023</div>
                                        <div className="table-cell border-2 border-l-transparent border-[#dbe2ef] rounded-se-xl rounded-ee-xl">Completed</div>
                                    </div>
                                    <div className="h-[2.5px]"></div>
                                    <div className="table-row">
                                        <div className="p-1 table-cell border-2 border-r-transparent border-[#dbe2ef] rounded-ss-xl rounded-es-xl"><img src="11.png" className="inline mr-2 p-1" alt=""></img>Elle Argent</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">12345</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">UI/UX Design</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">18 October, 2023</div>
                                        <div className="table-cell border-2 border-l-transparent border-[#dbe2ef] rounded-se-xl rounded-ee-xl">Completed</div>
                                    </div>
                                    <div className="h-[2.5px]"></div>
                                    <div className="table-row">
                                        <div className="p-1 table-cell border-2 border-r-transparent border-[#dbe2ef] rounded-ss-xl rounded-es-xl"><img src="11.png" className="inline mr-2 p-1" alt=""></img>Elle Argent</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">12345</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">UI/UX Design</div>
                                        <div className="table-cell border-2 border-x-transparent border-[#dbe2ef]">18 October, 2023</div>
                                        <div className="table-cell border-2 border-l-transparent border-[#dbe2ef] rounded-se-xl rounded-ee-xl">Completed</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination flex self-center">
                                <img src="icons/chevron_left.svg" alt=""></img>
                                <div className="p-2">1</div>
                                <div className="p-2">2</div>
                                <div className="p-2">3</div>
                                <img src="icons/chevron_right.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyTeachingPage;