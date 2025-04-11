import React, { useEffect, useRef } from "react";
import { barCharts, chartSocial, NetGrowth } from "../../APIS/APIS";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Followers from "./Followers";
import ActivePeople from "./ActivePeople";
import { useNavigate } from "react-router";
import io from "socket.io-client";
import useAxios from "../../hooks/useAxios";



const Home = () => {
  const navigate = useNavigate();
  const socketRef = useRef(null);
  const reconnectIntervalRef = useRef(null);

  if (!localStorage.getItem("authToken")) {
    window.location.href = "/login";
  }

  setInterval
 
  return (
    <div>
      <div className="hero">
        <div className="person w-full h-[60px] flex items-center">
          <h1 className="text-2xl text-[#1c2e5e]">Hi, Teams</h1>
        </div>
        <div className="container">
          <div className="card gap-5 flex-col">
            {/* Followers Count Cards */}
            <div className="cards border-[#E1E7F6] border border w-full h-auto flex gap-5 flex-wrap justify-between !px-[15px]">
              {chartSocial?.map((e, index) => (
                <article
                  key={index}
                  className="flex items-end justify-evenly rounded-lg border-gray-100 bg-white p-6 h-[94px] w-[170px] transition"
                >
                  <div className="flex items-center gap-4 h-full">
                    <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                      <img src={e.image} alt="" />
                    </span>
                    <div className="h-[100%] flex justify-evenly flex-col">
                      <p className="text-sm text-gray-500">{e.title}</p>
                      <p className="text-2xl font-medium text-gray-900">
                        {e.scoure}
                      </p>
                      <p className="text-[14px] font-medium flex justify-center items-center gap-5">
                        Followers
                        <div className="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          <span className="text-xs font-medium">
                            {e.followers}
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bar Charts */}
            <div className="charts-bar">
              <div className="cards border-[#E1E7F6] w-full h-auto flex gap-5 flex-wrap justify-between !px-[15px]">
                <div className="header flex w-[100%] justify-between items-center h-[50px]">
                  <h1>Followers</h1>
                  <select name="qweqwe" id="qweqwe">
                    <option value="">Instagram</option>
                    <option value="">Facebook</option>
                  </select>
                </div>
                <div className="info flex w-full justify-between">
                  <div className="description">
                    <h1>Net Growth</h1>
                    <p>Jun 2024 - Dec 2025</p>
                  </div>
                  {NetGrowth?.map((e, index) => (
                    <article
                      key={index}
                      className="flex items-end justify-evenly rounded-lg border-gray-100 bg-white p-6 h-[94px] w-[170px] transition"
                    >
                      <div className="flex items-center gap-4 h-full">
                        <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                          <img src={e.image} alt="" />
                        </span>
                        <div className="h-[100%] flex justify-evenly flex-col">
                          <p className="text-sm text-gray-500">{e.title}</p>
                          <p className="text-2xl font-medium text-gray-900">
                            {e.scoure}
                          </p>
                          <p className="text-[14px] font-medium flex justify-center items-center gap-2 text-[#1C2E5E]">
                            {e.mains}
                            <div className="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                              </svg>
                              <span className="text-xs font-medium">
                                {e.followers}
                              </span>
                            </div>
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <BarChart
                className="barCharts"
                width={730}
                height={400}
                data={barCharts}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>

            {/* Followers Line Chart */}
            <Followers />
          </div>

          <div className="card">
            <ActivePeople />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
