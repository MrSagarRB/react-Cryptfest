import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "./tabs/Dashboard";
import RightSideContainer from "./../components/RightSideContainer";
import Token from "../components/Token";
import Trade from "./tabs/Trade";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const getCorrecrPage = (tab) => {
    switch (tab) {
      case "Dashboard":
        return <Dashboard />;
      case "Trade":
        return <Trade/>;
      case "Deposits":
        return <h1 className="text-9xl">Deposits</h1>;
      case "Protocols":
        return <h1 className="text-9xl">Protocols</h1>;
      case "Settings":
        return <h1 className="text-9xl">Settings</h1>;
      case "Profile":
        return <h1 className="text-9xl">Profile</h1>;
    }
  };

  return (
    <div className="primary-bg  ">
      <div className="py-5 px-10">
        <Header />
      </div>

      <div section="body" className="flex justify-between px-10 pt-5  ">
        <div>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className=" w-full px-[10px]"> {getCorrecrPage(activeTab)}
     
        </div>

        <div>
          <RightSideContainer />
        </div>
      </div>
      {/* <div className="flex items-center justify-center">
        <Token />{" "}
      </div> */}
    </div>
  );
}

export default HomePage;
