import React from "react";

const FillQuizMsp = () => {
  return (
    <div className="m-14 flex flex-col flex-wrap justify-center items-center">
      <div className="flex flex-col flex-wrap justify-center items-center w-7/12 shadow-2xl rounded-xl px-10 gap-1">
        <div className="lato font-bold">Question 1 : Blablabla</div>
        <div className="lato font-normal mb-2">
          Quiz 2.1: Python Snytax and Variables
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-start items-start">
            <label className="font-bold text-start">
              Question 1 -
              <select className="w-auto cursor-pointer">
                <option className="">Multiple Choice</option>
                <option className="">Short/Long Answer</option>
                <option className="">Multiple Select Questions</option>
              </select>
            </label>
          </div>
        </div>
        <div class="flex flex-col border-2 border-gray-200 w-full mb-4">
          <div className="border-b-2 flex flex-row bg-blue-50 py-2 px-3 gap-2">
            <img
              src="/icons/bold.png"
              className="w-3 cursor-pointer"
            ></img>
            <img
              src="/icons/italic.png"
              className="w-4 cursor-pointer"
            ></img>
            <img
              src="/icons/underline.png"
              className="w-4 cursor-pointer"
            ></img>
            <img
              src="/icons/picture.jpg"
              className="w-4 cursor-pointer"
            ></img>
          </div>
          <div className="p-2 px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ?
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="font-bold text-start mb-4">Answer</div>
          <div className="flex flex-row">
            <div className="px-3">
              <button>
                <img src="/icons/Checkbox.png" className="w-4"></img>
              </button>
            </div>
            <div className="flex flex-col border-2 border-gray-200 w-full mb-2">
              <div className="border-b-2 flex flex-row bg-blue-50 py-2 px-3 justify-between">
                <div className="flex flex-row gap-2">
                  <img
                    src="/icons/bold.png"
                    className="w-3 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/italic.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/underline.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/picture.jpg"
                    className="w-4 cursor-pointer"
                  ></img>
                  <select className="w-auto border-gray-200 bg-blue-50 cursor-pointer">
                    <option className="">0%</option>
                    <option className="">25%</option>
                    <option className="">50%</option>
                    <option className="">75%</option>
                    <option className="">100%</option>
                  </select>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm">
                  300
                </div>
              </div>
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ?
              </div>
            </div>
            <div className="px-3">
              <button>
                <img src="/icons/trash.png" className="w-4"></img>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="px-3">
              <div className="w-10"></div>
            </div>
            <div className="flex flex-row border-2 border-gray-200 w-full mb-4 items-center">
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm h-7 me-3">
                300
              </div>
            </div>
            <div className="px-3">
              <button className="w-[17.45px]"></button>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="px-3">
              <button>
                <img src="/icons/Checkbox.png" className="w-4"></img>
              </button>
            </div>
            <div className="flex flex-col border-2 border-gray-200 w-full mb-2">
              <div className="border-b-2 flex flex-row bg-blue-50 py-2 px-3 justify-between">
                <div className="flex flex-row gap-2">
                  <img
                    src="/icons/bold.png"
                    className="w-3 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/italic.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/underline.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/picture.jpg"
                    className="w-4 cursor-pointer"
                  ></img>
                  <select className="w-auto border-gray-200 bg-blue-50 cursor-pointer">
                    <option className="">0%</option>
                    <option className="">25%</option>
                    <option className="">50%</option>
                    <option className="">75%</option>
                    <option className="">100%</option>
                  </select>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm">
                  300
                </div>
              </div>
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ?
              </div>
            </div>
            <div className="px-3">
              <button>
                <img src="/icons/trash.png" className="w-4"></img>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="px-3">
              <div className="w-10"></div>
            </div>
            <div className="flex flex-row border-2 border-gray-200 w-full mb-4 items-center">
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm h-7 me-3">
                300
              </div>
            </div>
            <div className="px-3">
              <button className="w-[17.45px]"></button>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="px-3">
              <button>
                <img src="/icons/Checkbox.png" className="w-4"></img>
              </button>
            </div>
            <div className="flex flex-col border-2 border-gray-200 w-full mb-2">
              <div className="border-b-2 flex flex-row bg-blue-50 py-2 px-3 justify-between">
                <div className="flex flex-row gap-2">
                  <img
                    src="/icons/bold.png"
                    className="w-3 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/italic.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/underline.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/picture.jpg"
                    className="w-4 cursor-pointer"
                  ></img>
                  <select className="w-auto border-gray-200 bg-blue-50 cursor-pointer">
                    <option className="">0%</option>
                    <option className="">25%</option>
                    <option className="">50%</option>
                    <option className="">75%</option>
                    <option className="">100%</option>
                  </select>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm">
                  300
                </div>
              </div>
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ?
              </div>
            </div>
            <div className="px-3">
              <button>
                <img src="/icons/trash.png" className="w-4"></img>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="px-3">
              <div className="w-10"></div>
            </div>
            <div className="flex flex-row border-2 border-gray-200 w-full mb-4 items-center">
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm h-7 me-3">
                300
              </div>
            </div>
            <div className="px-3">
              <button className="w-[17.45px]"></button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="px-3">
              <button>
                <img src="/icons/Checkbox.png" className="w-4"></img>
              </button>
            </div>
            <div className="flex flex-col border-2 border-gray-200 w-full mb-2">
              <div className="border-b-2 flex flex-row bg-blue-50 py-2 px-3 justify-between">
                <div className="flex flex-row gap-2">
                  <img
                    src="/icons/bold.png"
                    className="w-3 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/italic.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/underline.png"
                    className="w-4 cursor-pointer"
                  ></img>
                  <img
                    src="/icons/picture.jpg"
                    className="w-4 cursor-pointer"
                  ></img>
                  <select className="w-auto border-gray-200 bg-blue-50 cursor-pointer">
                    <option className="">0%</option>
                    <option className="">25%</option>
                    <option className="">50%</option>
                    <option className="">75%</option>
                    <option className="">100%</option>
                  </select>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm">
                  300
                </div>
              </div>
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ?
              </div>
            </div>
            <div className="px-3">
              <button>
                <img src="/icons/trash.png" className="w-4"></img>
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="px-3">
              <div className="w-10"></div>
            </div>
            <div className="flex flex-row border-2 border-gray-200 w-full mb-4 items-center">
              <div className="p-2 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <div className="bg-gray-200 px-2 py-1 rounded-lg text-sm h-7 me-3">
                300
              </div>
            </div>
            <div className="px-3">
              <button className="w-[17.45px]"></button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mb-3">
          <button className="border-2 px-2 py-1">+ Add Choice</button>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="border-2 px-4 py-1 bg_mid_courseQuizzy rounded-xl text-white text-sm shadow-lg mb-8">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FillQuizMsp