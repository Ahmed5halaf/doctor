import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { PiCurrencyDollarSimpleThin } from "react-icons/pi";
import { HiPuzzle } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import avatar from "../assets/avatart/Photo.png";
import { listSidebar } from "../components/dummyData/data";
function Menu() {
  const menu = [
    {
      id: 1,
      titel: "Features",
      icon: <IoIosStar size={18} />,
    },
    {
      id: 2,
      titel: "Users",
      icon: <FaUserLarge size={18} />,
    },
    {
      id: 3,
      titel: "Pricing",
      icon: <PiCurrencyDollarSimpleThin size={18} />,
    },
    {
      id: 4,
      titel: "Integrations",
      icon: <HiPuzzle size={18} />,
    },
  ];

  const [active, setActive] = useState(!false);

  const toggleClass = () => {
    setActive(!active);
  };
  return (
    <div>
      <div className="pr-6 pl-4 border-b pb-10 border-[#fff]">
        <div
          className={`flex items-center justify-between  text-sm	mt-14 cursor-pointer `}
          onClick={toggleClass}
        >
          <div
            className={`flex items-center gap-1 ${
              !active ? "text-[#AEB9E1]" : "text-[#CB3CFF]"
            }`}
          >
            <AiFillHome size={18} />
            <span>Dashboard</span>
          </div>
          <div className="text-[#AEB9E1]">
            {active ? <IoIosArrowDown /> : <RiArrowRightSLine />}
          </div>
        </div>

        <div className="mt-4 ">
          {active &&
            listSidebar.map((item) => (
              <div key={item.id}>
                <div className="cursor-pointer hover:block text-sm text-[#AEB9E1] pl-[10px]rounded-md hover:bg-[#0A1330] w-[90%]  duration-75 hover:text-white  hover:border-l-[4px] hover:border-[#CB3CFF] hover:rounded-tl-[4px] hover:rounded-bl-[4px]">
                  <div className="p-[8px]">{item.titel}</div>
                </div>
              </div>
            ))}
        </div>
        <div className={`flex flex-col gap-4 text-sm mt-4 cursor-pointer `}>
          {menu.map((item) => (
            <div key={item.id}>
              <div className=" flex items-center justify-between text-[#AEB9E1] hover:text-[#CB3CFF] duration-75">
                <div className="flex items-center gap-2">
                  <div>{item.icon}</div>
                  <div>{item.titel}</div>
                </div>
                <div className="text-[#AEB9E1]">
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pr-6 pl-4 mt-8">
        <div className="flex items-center justify-between text-sm text-[#AEB9E1] hover:text-[#CB3CFF] duration-75">
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <IoSettingsSharp />
            <span>Settings</span>
          </div>
          <div className="text-[#AEB9E1]">
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
      <div className="pr-6 pl-4 mt-8">
        <div className="flex items-center justify-between text-sm text-[#AEB9E1] hover:text-[#CB3CFF] duration-75">
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <div className="rounded-full  w-[30px] h-[30px]">
              <img src={avatar} alt="" className="w-full h-full rounded-full" />
            </div>
            <div className="flex flex-col ">
              <span className="text-[#fff]">John Carter</span>
              <span className="text-[#AEB9E1] text-xs">Doctor</span>
            </div>
          </div>
          <div className="text-[#AEB9E1]">
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
