import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Sidebar = () => {
    return(
        <div className="p-10 fixed bottom-0 top-10 flex flex-col items-center justify-between">
            <div className="profil flex flex-col items-center">
                <img src="3d_avatar_13.png" className="w-200" alt=""/>
                <h1 className="text-xl font-bold mt-3">Nick Nelson</h1>
                <h1 className="text-xl mb-2">Cybersecurity</h1>
                <h1 className="text-xl">A Student, An Instructor</h1>
            </div>
            <div className="menu flex flex-col gap-1">
                <Link to="/my-learning" className="flex gap-2 p-2 items-start group rounded-lg hover:bg-[#3f72af]">
                    <ReactSVG src="icons/dashboard.svg" className="h-2 group-hover:stroke-white" fill="none" viewBox="24 24 24 24" alt="" beforeInjection={(svg) => {
                        svg.setAttribute('width', '25px');
                        svg.setAttribute('height', '25px');
                    }} />
                    <h2 className="text-l group-hover:text-white">Dashboard</h2>
                </Link>
                <Link to="/my-learning" className="flex gap-2 p-2 items-start group rounded-lg hover:bg-[#3f72af]">
                {/* hover:bg-[#3f72af] bg-[#3f72af] */}
                    <ReactSVG src="icons/local_library.svg" className="h-2 group-hover:stroke-white stroke-white" fill="none" viewBox="24 24 24 24" alt="" beforeInjection={(svg) => {
                        svg.setAttribute('width', '25px');
                        svg.setAttribute('height', '25px');
                    }} />
                    {/* text-white */}
                    <h2 className="text-l group-hover:text-white">My Learning</h2>
                </Link>
                <Link to="/my-teaching" className="flex gap-2 p-2 items-start group rounded-lg hover:bg-[#3f72af]">
                    <ReactSVG src="icons/school.svg" className="h-2 group-hover:stroke-white" fill="none" viewBox="24 24 24 24" alt="" beforeInjection={(svg) => {
                        svg.setAttribute('width', '25px');
                        svg.setAttribute('height', '25px');
                    }} />
                    <h2 className="text-l group-hover:text-white">My Teaching</h2>
                </Link>
                <Link to="/bookmark" className="flex gap-2 p-2 items-start group rounded-lg hover:bg-[#3f72af]">
                    <ReactSVG src="icons/bookmarks.svg" className="h-2 group-hover:stroke-white" fill="none" viewBox="24 24 24 24" alt="" beforeInjection={(svg) => {
                        svg.setAttribute('width', '25px');
                        svg.setAttribute('height', '25px');
                    }} />
                    <h2 className="text-l group-hover:text-white">Bookmark</h2>
                </Link>
            </div>
            <button className="btn-danger flex items-center px-5 py-1 rounded-xl">
                <h2 className="text-l text-white">Sign Out</h2> 
                <img src="icons/logout.svg" className="w-5" alt="" />
            </button>
        </div>
    );
}

export default Sidebar;