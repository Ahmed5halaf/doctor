import ReactECharts from "echarts-for-react";
import { CgMore } from "react-icons/cg";
import List from "./../list/List";

const Line = () => {
  const option = {
    xAxis: {
      type: "category",
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Line 1",
        data: [100, 200, 75, 250, 70, 210, 130],
        type: "line",
        smooth: true,

        color: "#CB3CFF", // Change the color of Line 1 here
      },
      {
        name: "Area",
        data: [100, 200, 75, 250, 70, 210, 130],
        type: "line",
        areaStyle: {}, // Area style configuration, you can customize further
        color: "rgba(240, 215, 249,.1)", // Change the color of the area here
        smooth: true,
      },
    ],
  };

  return (
    <div className="bg-[#0B1739]  rounded-lg absolute  w-[55%] z-1 right-[450px] shadow-md">
      <div className="flex justify-between pt-4 px-6">
        <div>
          <h3 className="text-lg">Patient Visit</h3>
        </div>
        <div className="flex bg-[#081028] rounded-md">
          <div className="bg-transparent flex ">
            <select
              className="rounded-md  text-[10px] cursor-pointer appearance-none focus:outline-none bg-[#081028] text-[#AEB9E1] py-2 px-4 pr-8  leading-tight "
              id="grid-state"
            >
              <option>This Month</option>
            </select>
            <div className="pointer-events-none  bg-transparent flex items-center px-2 text-[#AEB9E1]">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ReactECharts option={option} style={{ height: "300px" }} />
      <div className="px-6">
        <div>
          <div className="flex justify-between ">
            <div>
              <h3 className="text-lg">Patient Data</h3>
            </div>
            <div className="cursor-pointer">
              <CgMore size={20} />
            </div>
          </div>
        </div>
        <div className="mt-6  grid grid-cols-5 text-[#A9A9A9] border-[#E8E8E8] border-b-[.5px] pb-5">
          <h2>Patient name</h2>
          <h2>Date In</h2>
          <h2>Symptoms</h2>
          <h2>Status</h2>
        </div>
        <List />
      </div>
    </div>
  );
};

export default Line;
