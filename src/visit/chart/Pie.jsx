import ReactECharts from "echarts-for-react";

const MyPieChart = () => {
  const option = {
    legend: {
      orient: "vertical",
      right: -30,
      top: 70,
      bottom: 20,

      textStyle: {
        color: "#fff", // Change the color of legend text here
      },
    },
    series: [
      {
        name: "Data",
        type: "pie",
        radius: ["55%", "70%"], // Adjust the radius as needed
        avoidLabelOverlap: false,
        padAngle: 3,
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: true,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          {
            value: 370,
            name: "Excellent",
            itemStyle: { color: "#3371EB" },
          },
          { value: 234, name: "Poor", itemStyle: { color: "#14CC26" } },
          {
            value: 200,
            name: "Good",
            itemStyle: { color: "#FF8E26" },
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg">Patient Satisfaction</h2>
      <div className="lg:relative ">
        <ReactECharts
          option={option}
          style={{
            height: "200px",
            width: "400px",
            position: "absolute",
            right: "120px",
          }}
        />
      </div>
    </div>
  );
};

export default MyPieChart;
