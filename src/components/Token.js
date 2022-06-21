import React from "react";

const tableData = [
  {
    id: 1,
    name: "Bitcon",
    icon: "./bitcoin.png",
    balnce: "0,04321",
    totalValue: "$2,340.32",
  },
  {
    id: 2,
    name: "Ethereum",
    icon: "./ethereum.png",
    balnce: "0,04321",
    totalValue: "$2,340.32",
  },
];

function Token() {
  return (
    <div className=" w-full h-[230px] glass-bg1 p-5 mr-24">
      <p className="text-[20px]">Tokens</p>
      <div>
        <table className="w-full">
          <tr className="  text-[#878787] text-[14px] font-inter ">
            <th className="text-left py-5">Name</th>{" "}
            <th className="text-center"> Balance</th> <th> Total Value</th>{" "}
            <th>Trade</th>
          </tr>

          {tableData.map((item) => {
            return (
              <tr className="text-[16px] ">
                <td className="flex gap-2 items-center pb-5">
                  {" "}
                  <img src={` ./coins/${item.icon} `} /> {item.name}
                </td>
                <td className="text-center">{item.balnce}</td>
                <td className="text-center"> {item.totalValue}</td>
                <td>
                  <div className="text-center bg-slate-600  rounded-[6px] w-[72px] ml-auto mr-auto">
                    Trade
                  </div>{" "}
                </td>
              </tr>
            );
          })}
          {/* <tr className="text-[16px] ">
            <td className="flex gap-2 items-center pb-5">
              {" "}
              <img src="./coins/bitcoin.png" /> Bitcoin
            </td>
            <td className="text-center">0,04321</td>
            <td className="text-center"> $2,340.32</td>
            <td>
              <div className="text-center bg-slate-600  rounded-[6px] w-[72px] ml-auto mr-auto">
                Trade
              </div>{" "}
            </td>
          </tr>
          <tr className="text-[16px] ">
            <td className="flex gap-2 items-center">
              {" "}
              <img src="./coins/bitcoin.png" /> Bitcoin
            </td>
            <td className="text-center">0,04321</td>
            <td className="text-center"> $2,340.32</td>
            <td>
              <div className="text-center bg-slate-600  rounded-[6px] w-[72px] ml-auto mr-auto">
                Trade
              </div>{" "}
            </td>
          </tr> */}
        </table>
      </div>
    </div>
  );
}

export default Token;
