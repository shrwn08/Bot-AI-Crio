import React from "react";
import Rating from "@mui/material/Rating";
import User from "./Asset/user.png";
import Logo from "./Asset/Logo-image.png";

const HistoryChat = ({ cardDataDetails }) => {
  if (!cardDataDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="font-[ubuntu] font-normal text-[28px] text-black flex justify-center items-center">
        Conversation History
      </div>
      <div className="w-11/12 h-full flex flex-col justify-start items-center">
        <div className="w-11/12 font-[Ubuntu] font-normal text-xl text-black flex justify-start items-center">
          Today's Chats
        </div>
        <div className="w-11/12 h-[calc(100%-100px)] flex flex-col justify-start items-start overflow-y-auto mt-4 space-y-4">
          {cardDataDetails.map((info, index) => (
            <div
              className="w-full flex flex-col items-start mt-4 space-y-4 bg-gradient-to-r from-[#BFACE2] to-[#D7C7F4] rounded-[10px] p-4"
              key={index}
            >
              <div className="w-full flex justify-start items-start flex-col">
                <div className="flex items-center justify-between gap-x-8 sm:justify-start">
                  <div className="w-10 h-10 sm:w-[65.3px] sm:h-[69px] rounded-full overflow-hidden">
                    <img
                      src={User}
                      alt="user"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[3/5]">
                    <div className="font-[Ubuntu] font-bold text-base text-black">
                      You
                    </div>
                    <div className="font-[open] font-normal text-base text-black">
                      {info.askedQuestion}
                    </div>
                    <div className="text-gray-500">{info.time}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-6 sm:justify-start mt-4">
                  <div className="bg-blue-400 w-64 h-10 sm:w-[100px] sm:h-[60px] overflow-hidden rounded-full">
                    <img
                      src={Logo}
                      alt="user"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[3/5]">
                    <div className="font-[Ubuntu] font-bold text-base text-black">
                      Soul AI
                    </div>
                    <div className="font-[open] font-normal text-base text-black">
                      {info.answerData}
                    </div>
                    <div className="text-gray-500">{info.time}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryChat;
