const Rate = ({ title, total, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h4
        className={`border-r border-[#A9A9A9] pb-5 px-4  text-[#A9A9A9] text-xs  ${className}`}
      >
        {title}
      </h4>
      <h4 className={`text-[21px] border-r border-[#A9A9A9] ${className}`}>
        {total}
      </h4>
    </div>
  );
};

export default Rate;
