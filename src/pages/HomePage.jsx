import React from "react";
import { NavLink } from "react-router-dom";

import BimboProfile from '/src/assets/profile.jpg';
import BimboBackground from '/src/assets/background.jpg';

const HomePage = () => {
  return (
    <div
      className="bg-image bg-repeat w-full h-screen flex justify-center items-center "
      style={{ backgroundImage: `url(${BimboBackground})`, backgroundSize: 'contain', backgroundPosition:'top left'  }}
    >
      <div className="modal bg-[#ffffffb6] rounded-lg p-6 relative">
        <div className="modal-content mt-20">
          <div className="modal-body flex flex-col justify-center items-center">
            <div className="modal-image-container bg-[#D33467] w-[150px] h-[150px] rounded-full flex justify-center items-center absolute top-[-70px]">
              <img
                src={BimboProfile}
                alt="profile image"
                className="h-[94%] w-[94%] rounded-full border-4 border-white"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">
                <span className="bg-[#D33467] w-[20px] h-[20px] inline-block rounded-full mr-2"></span>
                Isabella James
              </h3>
              <p>Click here for raffle payment</p>
            
              <NavLink
                to="/raffle/payment"
                className="onlyfan rounded-md px-7 py-2 bg-[#D33467] block my-4 text-white font-bold hover:scale-105 transition-all"
              >
                Make Payment
              </NavLink>

              <p className="mt-10">
                Powered by <span className="text-[#D33467]">e-creativeagency.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
