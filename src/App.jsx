import React from "react";
import SalesChart from "./components/Main";
import Navbar from "./components/Navbar";
import SidebarDashboard from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col bg-[#f2f7f8] w-full">
      <Navbar />
      <div className="flex w-full  flex-grow">
        <SidebarDashboard />
        <div className="flex-grow w-full">
          <SalesChart />
        </div>
      </div>
    </div>
  );
};

export default App;
