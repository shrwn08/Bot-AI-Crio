import React, { useState } from "react";
import "./home.css";
import SideBar from "./SideBar";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamBurgerBtn = () => {
    setShowMenu(!showMenu);
    if (showMenu === false) {
      console.log("close btn display");
    } else {
      console.log("open btn display");
    }
  };

  return (
    <div>
      <div className="relative h-screen flex bg-gradient-to-r from-[#D7C7F433] to-[#9785BA33] overflow-hidden">
        <div
          className={`sm:w-2/12 bg-white z-10 ${showMenu ? "block" : "hidden"}`}
          id="sidebar-container"
        >
          <SideBar />
        </div>
        <div
          className="w-full absolute right-0 h-screen flex flex-col justify-between sm:w-10/12"
          id="header-inputField"
        >
          <div className="flex ">
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
            ) : (
              null
            )}
            <div
                className="font-ubuntu text-3xl font-bold text-[#9785BA] my-2 mx-2 h-24 z-0"
                id="botAI-heading"
              >
                Bot AI
              </div>
          </div>

          <form>
            <div className=" w-full mx-2 flex justify-center items-center gap-x-4 sm-justify-between z-10">
              <input className="bg-white w-full border-solid border border-[#00000073] rounded my-4 h-10 sm-w-10/12" />
              <button
                type="button"
                className="w-16 hover: rounded bg-[#c2a9f1] hover:bg-[#9f73ef] text-black dark:text-white h-10 "
              >
                Ask
              </button>
              <button
                type="submit"
                className="w-16 hover: rounded bg-[#c2a9f1] hover:bg-[#9f73ef] text-black dark:text-white h-10 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
