import { CgMore } from "react-icons/cg";
import MyPieChart from "../../visit/chart/Pie";
import DateDoc from "./../../components/dateDoc/DateDoc";

const Upcoming = () => {
  return (
    <div>
      <div className="text-lg flex justify-between items-center my-12">
        <div>
          <h2>Upcoming Appointment</h2>
        </div>
        <div className="cursor-pointer">
          <CgMore size={20} className="text-[#A9A9A9]" />
        </div>
      </div>
      <div className="">
        <h3 className="text-[#3371EB] after:absolute after:border-[#3371EB] after:border after:top-[53.5%] after:right-[20px] after:w-[18%]">
          July 30, 2022
        </h3>
      </div>
      <div>
        <DateDoc
          name={"Nurse Visit 20"}
          title={"Dr. Carol D. Pollack-rundle"}
        />
        <DateDoc name={"Annual Visit 15"} title={"Dr.	Donald	F.	Watren"} />
      </div>
      <div>
        <div className="mt-6">
          <MyPieChart />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
