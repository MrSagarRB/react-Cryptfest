import React from "react";
import ChainContainer from "./ChainContainer";

const conData = [
  {
    icon: "bitcoin.png",
    title: "Bitcoin",
    value: "55,3B",
    progress: 71,
    color: "primary",
  },
  {
    icon: "ethereum.png",
    title: "Ethereum",
    value: "48,3B",
    progress: 44,
    color: "secondary",
  },
  {
    icon: "shiba.png",
    title: "Shiba",
    value: "24,3B",
    progress: 90,
    color: "success",
  },
  {
    icon: "solona.png",
    title: "Solona",
    value: "59,3B",
    progress: "71",
    color: "warning",
  },
  {
    icon: "tether.png",
    title: "Tether",
    value: "29,3B",
    progress: "77",
    color: "error",
  },
];

function RightSideContainer() {
  return (
    <div className="rounded-[16px] w-[390px] p-10 glass-bg1 ">
      <p className="font-inter text-[18px]  font-[500]">Chain allocation</p>
      <div className="py-5">
        {conData.map((item) => {
          return (
            <ChainContainer
              icon={item.icon}
              title={item.title}
              value={item.value}
              progress={item.progress}
              color={item.color}
            />
          );
        })}
      </div>
      <div className="bg-[#2B2B2B]  w-[224px] h-[39px] flex items-center justify-center rounded-[12px] mr-auto ml-auto text-[16px]">
        {" "}
        View More
      </div>
    </div>
  );
}

export default RightSideContainer;
