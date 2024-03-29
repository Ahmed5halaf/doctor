import { RiArrowRightSLine } from "react-icons/ri";

const DateDoc = ({ name, title }) => {
  return (
    <div>
      <div className="flex relative items-center border-b justify-between my-4 text-sm text-[#A9A9A9] pb-6 p-4 px-8">
        <div className="flex items-center gap-2">
          <div>
            <h4 className="mb-8 before:absolute before:left-[14px] before:top-[21px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#A9A9A9]">
              08:30 am - 10:30 am
            </h4>
            <h4 className="text-[#fff] mb-1.5">{name}</h4>
            <h4>{title}</h4>
          </div>
        </div>
        <div className="text-[#A9A9A9]">
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default DateDoc;
