import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";


const Layout = () => {
  const [changeWidth, setchangeWidth] = useState(false);
  const pathname = useLocation().pathname;
  const toggleClick = () => {
    setchangeWidth(!changeWidth);
  };

  if (pathname.includes("login") ) {
    return <Outlet />;
  }

  return (

    <div>
      <Header/>
      <div className="layout-page">
        <div className={`container ${changeWidth ? "changeWidthx" : ""}`}>
          <div className="card ForNavBar">
            <div className="menu">
              <button onClick={() => toggleClick()}>
                <IoIosArrowRoundForward
                  className={changeWidth ? "rotates" : ""}
                />
              </button>
            </div>
            <Navbar ChangeStyle={changeWidth} />
      
          </div>
          <div className="card ForCharts">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
