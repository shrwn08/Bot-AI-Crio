import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Idea from "./Asset/idea.png";
const FeedbackPop = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-[#D7C7F433] to-[#9785BA33] fixed top-0 left-0">
      <form className="h-96 w-full bg-slate-50 flex justify-center items-center rounded-[10px] sm:w-2/3 sm:h-96">
        <div className="w-full h-full m-5 rounded-[10px] bg-[#FAF7FF] flex flex-col justify-center items-center">
          <div className="flex justify-between items-center p-3 sm:w-full sm">
            <div className="flex justify-center items-center gap-x-1">
              <div className="w-[40px] h-[42px]">
                <img className="" src={Idea} alt="idea-icon" />
              </div>
              <div className="w-[291px] h-7 font-sans font-normal text-black text-[22px]">
                Provide Additional Feedback
              </div>
            </div>
            <button className="hover:cursor-pointer">
              <CloseOutlinedIcon
                sx={{
                  width: "19px",
                  height: "32px",
                }}
              />
            </button>
          </div>
          <div className="w-full h-full flex justify-center items-center border-[#00000073]border-2 border-solid">
            <input type="text" className="w-full h-56 rounded-[10px] " />
          </div>
          <div className="w-full flex justify-end items-center ">
            <button className="bg-[#D7C7F4] p-3 rounded-[5px] mb-3 hover:cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackPop;
