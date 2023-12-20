import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import MyLearningItem from "./MyLearningItem";
import SortSearch from './SortSearch';

const MyLearningPage = () => {
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
                        <MyLearningItem completed/>
                        <MyLearningItem />
                        <MyLearningItem />
                        <MyLearningItem completed/>
                        <MyLearningItem ranked/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyLearningPage;