import { FaArrowAltCircleUp } from "react-icons/fa";

const Cart = ({ title, number, icon }) => {
  return (
    <div className="bg-[#0B1739] mt-4 ml-6 flex flex-1 flex-col gap-6 px-3 py-2 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-[#86929E]">{title}</h3>
          <h3 className="text-[28px]">{number}</h3>
        </div>
        <div>{icon}</div>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1 text-[#00B69B]">
          <FaArrowAltCircleUp />
          <span>8.5%</span>
        </div>
        <span className="text-[#86929E]">Up from last month</span>
      </div>
    </div>
  );
};

export default Cart;
