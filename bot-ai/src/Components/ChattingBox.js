import React, { useState, useEffect, useRef } from "react";
import FeedbackPop from "./FeedbackPop";
import User from "./Asset/user.png";
import SoulAI from "./Asset/Logo-image.png";
import LikeBtn from "./Asset/like.png";
import Dislike from "./Asset/dislike.png";
import RatingComponent from "./RatingComponent";

const ChattingBox = ({ data, inputData, setCardData, saveBtn }) => {
  const [feedbacks, setFeedbacks] = useState("");
  const [resData, setResData] = useState([]);
  const [dislikeBtn, setDislikeBtn] = useState([]);
  const [likeBtn, setLikeBtn] = useState([]);
  const [showRating, setShowRating] = useState([]);
  const [time, setTime] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
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
    if (saveBtn) {
      setCardData({
        askedQuestion: inputData.toString(),
        answerData: resData.toString(),
        time: time,
        rating: ratingValue,
        feedbackData: feedbacks,
      });
    }
  }, [saveBtn, inputData, resData, ratingValue, feedbacks, time, setCardData]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [resData, inputData]);

  if (!data && !inputData && !resData) {
    return <div>Loading...</div>;
  }

  const handleDislikeBtn = (index) => {
    setDislikeBtn((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleFeedbackSubmitBtn = (index) => {
    setDislikeBtn((prevState) => {
      const newState = [...prevState];
      newState[index] = false; // Close the FeedbackPop
      return newState;
    });
  };

  const handleLikeBtn = (index) => {
    setLikeBtn((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setShowRating((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleRatingChange = (index, newValue) => {
    setRatingValue(newValue);
    setShowRating((prevState) => {
      const newState = [...prevState];
      newState[index] = false; // Hide the RatingComponent after a rating is selected
      return newState;
    });
  };

  return (
    <div
      className="w-full flex justify-center items-center flex-col overflow-y-auto sm:mb-20 "
      ref={chatBoxRef}
      style={{ maxHeight: "80vh" }}
    >
      <div className="w-10/12 sm:mb-20 ">
        {inputData.map((ques, index) => (
          <React.Fragment key={index}>
            <div className="w-full flex justify-start items-center rounded-[20px] bg-[#EFEFEF] shadow-lg gap-x-4 p-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={User}
                  alt="user-logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col w-3/5 justify-start flex-grow">
                <p className="font-[ubuntu] font-bold text-[16px] text-black">
                  You
                </p>
                <p className="font-[sans] font-normal">{ques}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-[sans] font-normal text-[12px] text-[#0000009E]">
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
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={SoulAI}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start flex-grow w-3/5 pl-2.5">
                <p className="font-[ubuntu] font-bold text-[16px] text-black">
                  Soul AI
                </p>
                <p className="font-[sans] font-normal">{resData[index]}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-[sans] font-normal text-[12px] text-[#0000009E]">
                    {time}
                  </p>

                  <div className="flex gap-x-2 ">
                    {showRating[index] && (
                      <RatingComponent
                        setRatingValue={(newValue) =>
                          handleRatingChange(index, newValue)
                        }
                        ratingValue={ratingValue}
                      />
                    )}
                    <button
                      onClick={() => handleLikeBtn(index)}
                      className="h-4 w-4 hover:cursor-pointer"
                    >
                      <img src={LikeBtn} alt="like" />
                    </button>

                    <button
                      onClick={() => handleDislikeBtn(index)}
                      className="h-4 w-4 hover:cursor-pointer"
                    >
                      <img src={Dislike} alt="dislike" />
                    </button>
                    {dislikeBtn[index] && (
                      <FeedbackPop
                        setFeedbacks={setFeedbacks}
                        feedbacks={feedbacks}
                        handleFeedbackSubmitBtn={() =>
                          handleFeedbackSubmitBtn(index)
                        }
                      />
                    )}
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
