import React from "react";
import Chart from "react-apexcharts";

function StockChart() {
  const series = [
    {
      name: "10 May",
      data: [10,20,30,40,30,70,30,90,45,60,170],
    },
    {
        name: "10 May",
        data: [20,30,10,10,50,60,70,80,90,100,110],
      },
      {
        name: "10 May",
        data: [50,40,70,20,80,60,90,45,60,20],
      },
     
  ];
  

  const options = {
    chart: {
      id: "simple-bar",
    },
    xaxis: {
      category: ["Cloths", "Footware"],
    },
  };



  return (
    <div className="text-black">
      <Chart options={options} series={series} type="bar" width="90%" />
    </div>
  );
}

export default StockChart;
