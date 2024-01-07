import React from "react";
import { Link } from "react-router-dom";
const EnrollSuccessPopup = ({ isSuccess, onCloseEnrollAttemptStatus }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition duration-300 ease-in-out">
      <div className="absolute w-fit flex flex-col flex-wrap justify-between items-center text-black bg-white rounded-2xl py-4 px-5 text-sm text-center gap-2 max-w-[400px]">
        {isSuccess === "success" ? (
          <div className="font-semibold">You are successfully enrolled!</div>
        ) : (
          <div className="font-semibold">You need to logged in first!</div>
        )}
        {isSuccess === "success" ? (
          <img src="/icons/success.svg" className="w-24" alt="" />
        ) : (
          <img src="/icons/error.svg" className="w-24" alt="" />
        )}

        <div className="flex flex-row justify-around items-center text-white font-light gap-5">
          {isSuccess === "success" ? (
            <div
              onClick={onCloseEnrollAttemptStatus}
              className="cursor-pointer rounded-2xl flex items-center justify-center bg_mid_courseQuizzy w-32 py-2"
            >
              Back
            </div>
          ) : (
            <div onClick={onCloseEnrollAttemptStatus}>
              <Link
                to={"/"}
                className="cursor-pointer rounded-2xl flex items-center justify-center bg_mid_courseQuizzy w-32 py-2"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollSuccessPopup;
