import React from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

const tab = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HiOutlineViewGridAdd fontSize={24} />,
  },

  {
    id: 2,
    name: "Trade",
    icon: <AiOutlineLineChart fontSize={24} />,
  },

  {
    id: 3,
    name: "Deposits",
    icon: <RiExchangeDollarFill fontSize={24} />,
  },

  {
    id: 4,
    name: "Protocols",
    icon: <BiPurchaseTagAlt fontSize={24} />,
  },

  {
    id: 5,
    name: "Settings",
    icon: <GoSettings fontSize={24} />,
  },
  {
    id: 6,
    name: "Profile",
    icon: <BiUser fontSize={24} />,
  },
];

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className=" w-[300px] h-full flex flex-col justify-between items-center  ">
      <div>
        {tab.map((options) => {
          return (
            <div
              className={`flex items-center gap-3 p-5  rounded-[16px] h-[56px] w-[300px] cur-point ${
                activeTab === options.name && "active-tab"
              }`}
              onClick={() => setActiveTab(options.name)}
            >
              {options.icon}
              <p className="text-[18px] font-inter font-[500]">
                {options.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="relative bottom-0 w-[120px] text-[18px] flex-center gap-3 cur-point">
        {" "}
        <BiLogOut fontSize={30} /> Log Out
      </div>
    </div>
  );
}

export default Sidebar;
