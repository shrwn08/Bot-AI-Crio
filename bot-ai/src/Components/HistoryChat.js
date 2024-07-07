import React from "react";
import Rating from "@mui/material/Rating";
import User from "./Asset/user.png";
import Logo from "./Asset/Logo-image.png";

const HistoryChat = ({ cardDataDetails }) => {
  if (!cardDataDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen mb-8 flex flex-col items-center ">
      <div className="font-[ubuntu] font-normal text-[28px] text-black flex justify-center items-center mt-4">
        Conversation History
      </div>
      <div className="w-11/12 h-3/4 flex flex-col justify-end items-center ">
        <div className="w-full font-[Ubuntu] font-normal text-xl text-black flex justify-start items-center mb-4">
          Today's Chats
        </div>
        <div className="w-full h- flex-1 overflow-y-auto  space-y-4 " style={{ maxHeight: '800px' }}>
          {cardDataDetails.map((info, index) => (
            <div
              className="w-full flex flex-col items-start bg-[#d7c7f4] rounded-lg p-4 shadow-md"
              key={index}
            >
              <div className="w-full flex flex-col items-start">
                <div className="flex items-center gap-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={User}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-[Ubuntu] font-bold text-lg text-black">
                      You
                    </div>
                    <div className="font-[sans] font-normal text-base text-black">
                      {info.askedQuestion}
                    </div>
                    <div className="text-gray-500">{info.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={Logo}
                      alt="Soul AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-[Ubuntu] font-bold text-lg text-black">
                      Soul AI
                    </div>
                    <div className="font-[sans] font-normal text-base text-black">
                      {info.answerData}
                    </div>
                    <div className="text-gray-500">{info.time}</div>
                  </div>
                </div>
                {info.rating && (
                  <div className="mt-2">
                    <Rating
                      name="read-only"
                      value={info.rating}
                      readOnly
                      precision={0.5}
                    />
                  </div>
                )}
                {info.feedbackData && (
                  <div className="mt-2 text-gray-700">
                    Feedback: {info.feedbackData}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryChat;