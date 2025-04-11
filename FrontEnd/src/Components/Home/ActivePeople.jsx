import React from "react";
import { ActivPep } from "../../APIS/APIS";
const ActivePeople = () => {
  return (
    <div>
      <div className="active-people">
        <div className="header">
          <div className="title h-[46px] w-full flex justify-between">
            <h1 className="text-[#1C2E5E]">All Activities</h1>
            <p></p>
          </div>
        </div>
        <div className="container w-full h-full">
          {ActivPep?.map((e, index) => (
            <div className="active-card">
              <div className="box-info " key={index}>
                <div className="img">
                  <img
                    className="w-[35px] h-[35px] object-cover rounded-2xl"
                    src={e.image}
                    alt=""
                  />
                </div>
                <div className="text-people">
                  <h1>
                    @{e.title} <span>Started following you</span>
                  </h1>
                  <p>{e.time}</p>
                </div>
              </div>
              <div className="socialx">
                <button className="cursor-pointer">Follow</button>
                <h3>
                  <img src={e.imgSocial} alt="" /> {e.app}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivePeople;
