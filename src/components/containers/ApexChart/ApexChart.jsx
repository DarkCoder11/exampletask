import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./ApexChart.css";

const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = baseval;
    let y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};

const ApexChart = () => {
  const [options] = useState({
    chart: {
      stacked: false,
      zoom: {
        enabled: false
      }
    },
    colors: ["#0082E9"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.7,
        opacityTo: 0.8
      }
    },
    yaxis: {
      type: "datetime",
      labels: {
        show: false
      }
    },
    xaxis: {
      labels: {
        show: false
      }
    }
  });

  const [series] = useState([
    {
      data: generateDayWiseTimeSeries(
        new Date("1 Jun 2019 GMT").getTime(),
        50,
        {
          min: 20,
          max: 30
        }
      )
    }
  ]);

  return (
    <div id="chart">
      <Chart options={options} series={series} type="area" height="350" />
    </div>
  );
};

export default ApexChart;
