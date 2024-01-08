import React from "react";

const SortSearch = () => {
    return (
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
    )
}

export default SortSearch;