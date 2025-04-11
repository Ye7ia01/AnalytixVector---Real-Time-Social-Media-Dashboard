import React from "react";
import bg from "../../assets/map.png";
import Css from "../../Styles/stylebar.module.css";
const Maps = () => {

  return (
    <div>
      <div className="maps ">
        <div className="header flex w-[100%] justify-between items-center h-[100px] ">
          <div className="textx">
            <h1>Top Countries</h1>
          </div>
          <select name="qweqwe" id="qweqwe">
            <option value="">Instagram</option>
            <option value="">Facebook</option>
          </select>
        </div>
        <div className="containerr flex">
          <div className="cardd">
            <img src={bg} alt="" />
          </div>
          <div className="cardd">
            <div className={Css.card}>
              <div className={Css.skills}>
                <div className={Css.skill}>
                  <div className={Css.skillName}>
                    <h4>Filipina</h4>
                  </div>
                  <div
                    className={Css.skillbar}      >
                    <div
                      className={Css.skillper}
                      per="75k"
                      style={{ maxWidth: "75%" }}
                    />
                  </div>
                </div>
                <div className={Css.skill}>
                  <div className={Css.skillName}>
                    <h4>Thailand</h4>
                  </div>
                  <div
                    className={`${Css.skillbar} `}
                  >
                    <div
                      className={Css.skillper}
                      per="55k"
                      style={{ maxWidth: "55%" }}
                    />
                  </div>
                </div>
                <div className={Css.skill}>
                  <div className={Css.skillName}>
                    <h4>Japan</h4>
                  </div>
                  <div
                    className={`${Css.skillbar} `}
                  >
                    <div
                      className={Css.skillper}
                      per="90k"
                      style={{ maxWidth: "90%" }}
                    />
                  </div>
                </div>
                <div className={Css.skill}>
                  <div className={Css.skillName}>
                    <h4>Rusia</h4>
                  </div>
                  <div
                    className={`${Css.skillbar} `}
                  >
                    <div
                      className={Css.skillper}
                      per="55k"
                      style={{ maxWidth: "55%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
