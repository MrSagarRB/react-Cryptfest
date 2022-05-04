import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "./tabs/Dashboard";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const getCorrecrPage = (tab) => {
    switch (tab) {
      case "Dashboard":
        return <Dashboard />;
      case "Trade":
        return <h1>Trade</h1>;
      case "Deposits":
        return <h1>Deposits</h1>;
      case "Protocols":
        return <h1>Protocols</h1>;
      case "Settings":
        return <h1>Settings</h1>;
      case "Profile":
        return <h1>Profile</h1>;
    }
  };



  return (
    <div className="primary-bg">
      <div className="py-5 px-10">
        <Header />
      </div>

      <div section="body" className="flex justify-between px-10 pt-5">
        <div>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div> {getCorrecrPage(activeTab)}</div>

        <div>right side container</div>
      </div>
    </div>
  );
}

export default HomePage;
