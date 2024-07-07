import React from 'react'
import Logo from './Asset/Logo-image.png'
const HomeCard = () => {
  return (
    <div>
        <div className="flex justify-end items-center  w-full h-full gap-y-40 flex-col sm:gap-y-16 ">
                <div className="flex  w-full  justify-center items-center flex-col gap-y-8">
                  <div className="w-96 h-8 font-ubuntu text-black font-medium text-3xl">
                    How Can I Help You Today?
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden drop-shadow-xl">
                    <img className="" src={Logo} alt="logo" />
                  </div>
                </div>
                <div
                  className="
              grid grid-cols-1 gap-4  place-content-center sm:grid-cols-2"
                >
                  <div className="drop-shadow-xl rounded-md bg-white w-[22.25rem] h-[7rem] p-2">
                    <p className="w-[9.5rem] h-[2.875rem] font-ubuntu text-xl text-black leading-5 font-bold sm:w-full">
                      Hi, what is the weather
                    </p>
                    <p className="w-[15rem]  font-[sans] text-[#00000080] text-base font-normal sm:w-full">
                      Get immediate AI generated response
                    </p>
                    
                  </div>
                  <div className="drop-shadow-xl rounded-md bg-white w-[22.25rem] h-[7rem] p-2">
                    <p className="w-[9.5rem] h-[2.875rem] font-ubuntu text-xl text-black leading-5 font-bold sm:w-full">
                    Hi, what is my location
                    </p>
                    <p className="w-[15rem] font-[sans] text-[#00000080] text-base font-normal sm:w-full">
                      Get immediate AI generated response
                    </p>
                   
                  </div>
                  <div className="drop-shadow-xl rounded-md bg-white w-[22.25rem] h-[7rem] p-2">
                    <p className="w-[9.5rem] h-[2.875rem] font-ubuntu text-xl text-black leading-5 font-bold sm:w-full">
                    Hi, what is the temperature
                    </p>
                    <p className="w-[15rem]  font-[sans] text-[#00000080] text-base font-normal sm:w-full">
                      Get immediate AI generated response
                    </p>
                   
                  </div>
                  <div className="drop-shadow-xl rounded-md bg-white w-[22.25rem] h-[7rem] p-2 hidden sm:block">
                    <p className="w-[9.5rem] h-[2.875rem] font-ubuntu text-xl text-black leading-5 font-bold sm:w-full">
                    Hi, how are you
                    </p>
                    <p className="w-[15rem]  font-[sans] text-[#00000080] text-base font-normal sm:w-full">
                      Get immediate AI generated response
                    </p>
                    
                  </div>
                </div>
              </div>
    </div>
  )
}

export default HomeCard