import { BsSearch } from "react-icons/bs";
import { IoIosMic } from "react-icons/io";

const BarSearch = () => {
  return (
    <div className="flex md:flex-row flex-col gap-12 justify-center md:justify-between pt-6">
      <div className="md:w-[60%]  lg:pl-20 px-8">
        <div className="bg-[#2d3448] px-4 py-2 rounded-md text-sm flex items-center">
          <BsSearch size={14} />
          <input
            type="text"
            className="bg-transparent focus:outline-none pl-4 placeholder:text-white flex-1"
            placeholder="Search "
          />

          <IoIosMic size={18} />
        </div>
      </div>
      <div className="flex justify-center bg-[#081028] ">
        <div className="bg-transparent flex ">
          <select
            className=" text-sm cursor-pointer appearance-none focus:outline-none bg-[#081028] text-[#86929E] py-1 px-4 pr-8  leading-tight "
            id="grid-state"
          >
            <option>English (US)</option>
            <option>Arabic (AR)</option>
          </select>
          <div className="pointer-events-none  bg-transparent flex items-center px-2 text-[#86929E]">
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
  );
};

export default BarSearch;
