import React, { useState, useEffect, useRef } from "react";
import User from "./Asset/user.png";
import SoulAI from './Asset/Logo-image.png';
import LikeBtn from "./Asset/like.png";
import Dislike from "./Asset/dislike.png";

const ChattingBox = ({ data, inputData }) => {
  const [resData, setResData] = useState([]);
  const [time, setTime] = useState("");
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes.toString().padStart(2, "0");
      let mergeTime = `${hours}:${minutes} ${period}`;
      setTime(mergeTime);
    };

    updateClock(); // initial call to set the time immediately when the component mounts
    const intervalId = setInterval(updateClock, 1000); // update time every second

    return () => clearInterval(intervalId); // cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const inputValues = inputData.map((item) => item.toLowerCase());

    const fetchResponse = (input) => {
      const bringRes = data.find((entry) =>
        input.toLowerCase().includes(entry.question.toLowerCase())
      );
      return bringRes ? bringRes.response : "Sorry, unable to answer it.";
    };

    const responses = inputData.map((input) => fetchResponse(input));
    setResData(responses);
  }, [inputData, data]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [resData, inputData]);

  if (!data && !inputData && !resData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex justify-center items-center flex-col overflow-y-auto" ref={chatBoxRef} style={{ maxHeight: '80vh' }}>
      <div className="w-10/12">
        {inputData.map((ques, index) => (
          <React.Fragment key={index}>
            <div className="w-full flex justify-start items-center rounded-[20px] bg-[#EFEFEF] shadow-lg gap-x-4 p-4 mb-4">
              <div className="w-[65.3px] h-[69px] rounded-full overflow-hidden">
                <img src={User} alt="user-logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-start flex-grow">
                <p className="font-[ubuntu] font-bold text-[16px] text-black">You</p>
                <p className="font-[open] font-normal">{ques}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-[open] font-normal text-[12px] text-[#0000009E]">
                    {time}
                  </p>
                  <div className="flex gap-x-2 items-center">
                    <button className="h-4 w-4 hover:cursor-pointer hidden">
                      <img src={LikeBtn} alt="like" />
                    </button>
                    <button className="h-4 w-4 hover:cursor-pointer hidden">
                      <img src={Dislike} alt="dislike" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start items-center rounded-[20px] bg-[#EFEFEF] shadow-lg gap-x-4 p-4 mb-4">
              <div className="w-[65.3px] h-[69px] rounded-full overflow-hidden">
                <img src={SoulAI} alt="user" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-start flex-grow">
                <p className="font-[ubuntu] font-bold text-[16px] text-black">Soul AI</p>
                <p className="font-[open] font-normal">{resData[index]}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-[open] font-normal text-[12px] text-[#0000009E]">
                    {time}
                  </p>
                  <div className="flex gap-x-2 ">
                    <button className="h-4 w-4 hover:cursor-pointer">
                      <img src={LikeBtn} alt="like" />
                    </button>
                    <button className="h-4 w-4 hover:cursor-pointer">
                      <img src={Dislike} alt="dislike" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChattingBox;
