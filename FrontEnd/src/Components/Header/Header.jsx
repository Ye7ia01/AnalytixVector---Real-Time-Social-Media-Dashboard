import React from "react";
import { IoIosArrowDown, IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import Profile from "../../assets/profile.jpg"
import Logo from "../../assets/logo.png"
const Header = () => {
  return (
    <div>
      <header>
        <div className="container ">
          <div className="card space-x-5 flex items-center gap-10">
            <div className="logo mr-4">
              <img src={Logo} alt="" />
              <h3>AnalytiXVector</h3>
            </div>
            <form className=" relative"> 
              <div className="relative w-full">
              <input id="search" type="search" placeholder="Search..." />
              <IoIosSearch  className="absolute top-2 right-[10px] text-[#889edb]"/>
              </div>
             
            </form>
          </div>
          <div className="card flex items-center gap-10">
            <button>
              <IoMdNotificationsOutline />
            </button>
            <div className="profile">
              <img src={Profile} alt="" />
              <p>Teams</p>
            </div>
            <button>
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
