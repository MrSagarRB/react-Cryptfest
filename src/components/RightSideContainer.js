import React from "react";
import ChainContainer from "./ChainContainer";

function RightSideContainer() {
  return (
    <div className="test w-[250px] h-[500px] p-5 ">
      <p className="font-inter text-[18px]  font-[500]">Chain allocation</p>
      <div className="py-5">
          <ChainContainer />        
      </div>
    </div>
  );
}

export default RightSideContainer;
