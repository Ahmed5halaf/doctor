import { PiPencilSimpleLine } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { itemList } from "../../components/dummyData/data";
const List = () => {
  const textColor = (type) => {
    if (type === 1) {
      return <span className="text-green-600">Confirmed</span>;
    } else if (type === 2) {
      return <span className="text-[#FFB800]">Incoming</span>;
    } else {
      return <span className="text-[#FF3030]">Cancelled</span>;
    }
  };
  return (
    <div className="mt-4 py-4">
      {itemList.map((item) => (
        <div
          className="grid grid-cols-5 items-center text-sm  grid-rows-2"
          key={item.id}
        >
          <div className="flex items-center gap-2">
            <div>
              <img src={item.image} alt="" />
            </div>
            <span>{item.name}</span>
          </div>
          <div className="text-[#86929E]">
            <span>{item.date}</span>
          </div>
          <div className="text-[#86929E]">
            <span>{item.symptoms}</span>
          </div>
          <div className="text-[#86929E]">{textColor(2)}</div>
          <div className="flex gap-4 items-center">
            <PiPencilSimpleLine size={24} className="cursor-pointer" />
            <AiOutlineDelete
              size={24}
              className="text-red-600 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
