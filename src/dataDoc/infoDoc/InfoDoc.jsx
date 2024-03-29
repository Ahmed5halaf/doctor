import ImgDoc from "../../assets/avatart/Rectangle 441.png";
import Rate from "../../components/rate/Rate";
import Upcoming from "../upcoming/Upcoming";
const InfoDoc = () => {
  return (
    <div className="text-[#fff] p-3">
      <div className="p-8 text-center mx-auto">
        <img className=" mx-auto" src={ImgDoc} alt="" />
        <h3 className="text-lg mt-4">Dr. Dilip Anmangandla, MD</h3>
      </div>
      <div className="flex items-center px-2 pb-6 border-[#fff] border-b">
        <Rate title={"Appointment"} total={"4250"} className={"flex-1"} />
        <Rate title={"Total Patients"} total={"32.1k"} className={"flex-1"} />
        <Rate title={"Rate"} total={"4.8"} className={"border-hidden flex-1"} />
      </div>
      <div>
        <Upcoming />
      </div>
    </div>
  );
};

export default InfoDoc;
