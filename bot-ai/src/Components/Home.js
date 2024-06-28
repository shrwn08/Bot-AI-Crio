import React, { useState } from "react";
import "./home.css";
import SideBar from "./SideBar";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import HomeCard from "./HomeCard";
import { CircularProgress } from "@mui/material";
import HistoryChat from "./HistoryChat";
import ChattingBox from "./ChattingBox";

const Home = ({ data,handleOnClickSaveBtn,setCardData,saveBtn,cardDataDetails }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [pastButton, setPastButton] = useState(false);
  const [askBtn,setAskBtn] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [inputData,setInputData] =useState([]);

  if (!data) {
    return <CircularProgress />;
  }
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
   
  };
  const handleAskButton = () => {
    
    if(inputValue === ''){
      setAskBtn(false)
    }else{
      setInputData((prevData)=> [...prevData,inputValue])
      setAskBtn(true)
      // console.log("ask button pressed");
    }
    setInputValue("");
  };

  const handleHamBurgerBtn = () => {
    setShowMenu(!showMenu);
    if (showMenu === false) {
      console.log("close btn display");
    } else {
      console.log("open btn display");
    }
  };
  const handlePastConversationBtn= () =>{
    setPastButton(true)
  }

  
  return (
    <div>
      <div className="relative h-screen flex bg-gradient-to-r from-[#D7C7F433] to-[#9785BA33] overflow-hidden">
        <div
          className={`sm:w-2/12 h-1/5  bg-white z-10 ${showMenu ? "block" : "hidden"}`}
          id="sidebar-container"
        >
          <SideBar handlePastConversationBtn={handlePastConversationBtn}/>
        </div>
        <div
          className="w-full absolute right-0 h-full flex  justify-center bg-pink  sm:w-10/12 "
          id="header-inputField"
        >
          <div className="flex w-full h-full flex-col justify-between  gap-y-8">
            <div className="flex justify-start items-center gap-x-3 ">
              {window.innerWidth < 640 ? (
                <button
                  onClick={handleHamBurgerBtn}
                  className="w-6 h-6 mt-4 block sm:hidden z-30 "
                >
                  {showMenu ? (
                    <ClearIcon
                      sx={{ color: "#9785BA", height: "24px", width: "24px" }}
                    />
                  ) : (
                    <MenuIcon
                      sx={{ color: "#9785BA", height: "24px", width: "24px" }}
                    />
                  )}
                </button>
              ) : null}
              <div
                className="font-ubuntu text-3xl font-bold text-[#9785BA] mt-3 mx-2 z-0"
                id="botAI-heading"
              >
                Bot AI
              </div>
            </div>
            <div className="w-full h-full mb-20   ">
              <div className="mb-20  ">
              {!pastButton ? (
                  !askBtn ? <HomeCard /> : <ChattingBox data={data} inputData={inputData} setCardData={setCardData} saveBtn={saveBtn} />
                ) : (
                  <HistoryChat cardDataDetails={cardDataDetails} />
                )}
              </div>
             

              
              <form className="px-6 " onSubmit={(e) => e.preventDefault()}>
                <div className="sm:w-4/5 w-11/12 fixed bottom-0 right-2 mx-2 flex justify-center items-center gap-x-4  z-10">
                  <input
                    className="bg-white w-full border-solid border border-[#00000073] rounded my-4 px-6 h-10 sm:w-10/12"
                    onChange={handleOnChange}
                    value={inputValue}
                  />
                  <button
                    type="button"
                    onClick={handleAskButton}
                    className="w-16 hover:rounded bg-[#c2a9f1] hover:bg-[#9f73ef] text-black dark:text-white h-10"
                  >
                    Ask
                  </button>
                  <button
                    type="submit"
                    onClick={handleOnClickSaveBtn}
                    className="w-16 hover:rounded bg-[#c2a9f1] hover:bg-[#9f73ef] text-black dark:text-white h-10"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
