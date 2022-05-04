import React from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

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
    <div className=" w-[234px] h-full flex flex-col gap-3 ">
      {tab.map((options) => {
        return (
          <div
            className={`flex items-center gap-3 p-5  rounded-[16px] h-[56px] w-[233px] cur-point ${
              activeTab === options.name && "active-tab"
            }`}
            onClick={() => setActiveTab(options.name)}
          >
            {options.icon}
            <p className="text-[18px] font-inter font-[500]">{options.name}</p>
          </div>
        );
      })}

      
    </div>
  );
}

export default Sidebar;
