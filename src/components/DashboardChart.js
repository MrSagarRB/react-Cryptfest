import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import CountUp from "react-countup";

const cardData = [
  {
    id: 1,
    title: "Total assets",
    value: "87.743",
    icon: <FaCoins fontSize={32} />,
  },
  {
    id: 2,
    title: "Total deposits",
    value: "78.743",
    icon: <BiWalletAlt fontSize={32} />,
  },
  {
    id: 3,
    title: "APY",
    value: "47.743",
    icon: <MdOutlineInsertChartOutlined fontSize={32} />,
  },
];

const durationData = [
  {
    id: 1,
    name: "1H",
  },
  {
    id: 2,
    name: "1D",
  },
  {
    id: 3,
    name: "3D",
  },
  {
    id: 4,
    name: "1M",
  },
  {
    id: 5,
    name: "1Y",
  },
  {
    id: 6,
    name: "cal",
  },
];

function DashboardChart() {
  const [durationActive, setDurationActive] = useState("1D");

  console.log(durationActive);

  return (
    <div className="  w-[773px]  p-5 bg-slate-900 rounded-[13px] font-inter">
      <div className="flex-center">
        {cardData.map((item) => {
          return (
            <div className="flex items-center gap-3 w-[190px] h-[60px]   ">
              <div className="db-card-icon">{item.icon}</div>
              <div>
                <p className=" text-[14px] font-[500]">{item.title} </p>
                <p className=" text-[24px] font-[700]">
                  {" "}
                  $ <CountUp decimal="." decimals={2} end={item.value} />{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p>Portfolios performance</p>
        <div className="flex-center mt-5">
          <div className="flex-center gap-3 ">
            <div className="h-[39px] w-[90px] dark-bg rounded-[25px] flex-center p-2 cur-point">
              {" "}
              <div className="etherium">
                {" "}
                <img src="/ether.png" />
              </div>
              <p className="text-[12px] font-[500]">ETH </p> <IoIosArrowDown />{" "}
            </div>
            <RiStockLine fontSize={25} className="cur-point" />
          </div>

          <div className="flex-center gap-2">
            {durationData.map((tab) => {
              return (
                <div
                  className={`chart-duration chart-duration-inactive ${
                    durationActive === tab.name && " chart-duration-active"
                  }`}
                  onClick={() => setDurationActive(tab.name)}
                >
                  <p> {tab.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardChart;
