import React from "react";
import { linechartsx } from "../../APIS/APIS";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Maps from "./maps";

const Followers = () => {
  return (
    <div>
      <div className="followers">
        <div className="container">
          <div className="cardxa flex flex-col">
            <div className="header flex w-[100%] justify-between items-center h-[100px] ">
              <div className="textx">
                <h1>Revenues</h1>
                <h3>$12,390</h3>
              </div>
              <select name="qweqwe" id="qweqwe">
                <option value="">Instagram</option>
                <option value="">Facebook</option>
              </select>
            </div>
            <LineChart
              width={750}
              height={400}
              data={linechartsx}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </div>
        </div>
        <Maps />
      </div>
    </div>
  );
};

export default Followers;
