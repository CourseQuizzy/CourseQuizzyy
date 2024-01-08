import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-gray-300 w-full h-[19rem]"></div>
      <div className="w-full h-1">
        <div className="w-2/5 h-1 bg_mid_courseQuizzy"></div>
        <div className="w-3/5 h-1 bg-white"></div>
      </div>
      <div className="w-full h-9 bg_light_mid_courseQuizzy flex flex-row justify-between items-center px-5">
        <div className="flex flex-row gap-6">
          <button>
            <img src="/icons/previous.svg" className="w-5" alt="" />
          </button>
          <button>
            <img src="/icons/pause.svg" className="w-4" alt="" />
          </button>
          <button>
            <img src="/icons/next.svg" className="w-5" alt="" />
          </button>
        </div>
        <div className="flex flex-row gap-6">
          <button>
            <img src="/icons/volume.svg" className="w-5" alt="" />
          </button>
          <button>
            <img src="/icons/setting.svg" className="w-5" alt="" />
          </button>
          <button>
            <img src="/icons/full-screen.svg" className="w-7" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
