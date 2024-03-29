import { HiMiniUsers } from "react-icons/hi2";
import Line from "./chart/Line";
import BarSearch from "./chart/bar/BarSearch";
import { GrUserManager } from "react-icons/gr";
import { RxCountdownTimer } from "react-icons/rx";
import Cart from "../components/card/Cart";

const MainVisit = () => {
  return (
    <div>
      <div className="text-white">
        <BarSearch />
        <div className="flex mt-6 flex-col">
          <div className="pl-3">
            <h2 className="white text-xl">Overview</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
            <Cart
              title="Total Patients"
              number="401"
              icon={
                <div className="p-2 mt-2 mr-2 bg-[#242d63] h-[55px] w-[55px] text-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
                  {
                    <HiMiniUsers
                      size={30}
                      className=" m-[5px] text-[#8280FF]"
                    />
                  }
                </div>
              }
            />
            <Cart
              title="Total Stuff"
              number="20"
              icon={
                <div className="p-2 mt-2 mr-2 bg-[#18404b] h-[55px] w-[55px] text-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
                  {
                    <GrUserManager
                      size={30}
                      className=" m-[5px] text-[#0EBE7F]"
                    />
                  }
                </div>
              }
            />
            <Cart
              title="Appointments"
              number="2040"
              icon={
                <div className="p-2 mt-2 mr-2 bg-[#543b47] h-[55px] w-[55px] text-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
                  {
                    <RxCountdownTimer
                      size={30}
                      className=" m-[5px] text-[#ee8863]"
                    />
                  }
                </div>
              }
            />
          </div>
        </div>

        <div className="mt-6 ">
          <Line />
        </div>
      </div>
    </div>
  );
};

export default MainVisit;
