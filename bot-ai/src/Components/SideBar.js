import React from "react";
import Logo from "./Asset/Logo-image.png";
import NewChat from "./Asset/write.png";

const SideBar = ({ handlePastConversationBtn }) => {
  return (
    <div className="fixed sm:w-2/12 w-2/4 h-screen bg-white">
      <div className="mt-10 flex flex-col justify-center items-center md:flex-row sm:justify-between sm:mx-4 sm:mt-2">
        <div className="w-8 h-8 rounded overflow-hidden">
          <img src={Logo} alt="Company Logo" className="cover" />
        </div>
        <p className="font-[ubuntu] font-normal text-xl mt-2">New Chat</p>
        <img
          src={NewChat}
          alt="Create New Chat"
          style={{ width: "24px", height: "24px" }}
          className="rounded object-cover mt-2"
        />
      </div>
      <div className="w-full flex justify-center items-center mt-4">
        <button className="font-[ubuntu] font-bold text-[16px] p-3 rounded-[10px] bg-[#D7C7F4] text-black" onClick={handlePastConversationBtn}>
          Past Conversations
        </button>
      </div>
    </div>
  );
};

export default SideBar;
